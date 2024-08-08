import { NextResponse } from 'next/server';

const githubUrl = (slug: string) => `https://raw.githubusercontent.com/stripe/stripe-ios/docs/${slug}`;
const contentTypeMap = {
  '.html': 'text/html',
  '.json': 'application/json',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.md': 'text/markdown',
};

const getGitHubFileSlug = (slug: string): string => {
  if (slug.endsWith('.struct')) {
    return `${slug}/index.html`
  }
  return slug.includes(".") ? slug : `${slug}/index.html`;
}

const getContentType = (path: string): string | null => {
  const ext = path.substring(path.lastIndexOf('.'));
  return contentTypeMap[ext] || null;
};

export async function middleware(request) {
  const url = new URL(request.url);
  let { pathname, origin } = url;
  
  if (!pathname.startsWith("/stripe-ios")) {
    // If it's not a stripe-ios route, continue with normal routing
    return NextResponse.next();
  }

  // Custom redirect rule: /stripe-ios/docs/Classes/:slug.html -> /stripe-ios/stripe/documentation/stripe/:slug
  const classesMatch = pathname.match(/^\/stripe-ios\/docs\/Classes\/([a-zA-Z0-9]+)\.html$/);
  if (classesMatch) {
    const slug = classesMatch[1];
    return NextResponse.redirect(`${origin}/stripe-ios/stripe/documentation/stripe/${slug.toLowerCase()}`);
  }
  
  // Remove .html extension
  if (pathname.endsWith('.html')) {
    pathname = pathname.slice(0, -5); // Remove .html
    return NextResponse.redirect(`${origin}${pathname.toLowerCase()}`);
  }
  
  // Convert URL to lowercase
  const lowercasePathname = pathname.toLowerCase();
  if (pathname !== lowercasePathname) {
    pathname = lowercasePathname;
    return NextResponse.redirect(`${origin}${pathname}`);
  }

  const slug = pathname.slice("/stripe-ios/".length); // Remove the initial "/stripe-ios/"
  
  if (slug === "" || slug === "documentation" || slug === 'docs') {
    return NextResponse.redirect(`${origin}/stripe-ios/documentation/stripe`);
  }

  // To conform with browser behavior, if a path is not a file then request index.html
  const finalSlug = getGitHubFileSlug(slug)

  // Request the associated file from the `docs` branch on Github
  const response = await fetch(githubUrl(finalSlug));
  
  if (!response.ok) {
    if (finalSlug.endsWith('.html')) {
      return NextResponse.redirect(`${origin}/stripe-ios/documentation/stripe`);
    }
    return new Response("Not found", { status: 404, statusText: "Not Found" });
  }
  
  let page = await response.text();

  // If needed, swap ../.. for just ..
  if (finalSlug === "data/documentation/stripe.json") {
    const json = JSON.parse(page);
    Object.entries(json.references).forEach(([, ref]) => {
      // @ts-expect-error
      const refHierarchy = ref.url.split("/");
      // @ts-expect-error
      // eslint-disable-next-line
      ref.url = ["..", ...refHierarchy.slice(2)].join("/");
    });
    page = JSON.stringify(json);
  }
  
  const headers = {};
  let contentType = getContentType(finalSlug);
  if (!contentType) {
    const contentTypeHeader = response.headers.get('content-type') || '';
    const contentTypeMatch = contentTypeHeader.match(/^[^;]+/);
    contentType = contentTypeMatch ? contentTypeMatch[0] : null;
  }
  if (contentType) headers['Content-Type'] = contentType;

  return new Response(page, {
    headers
  });
}

// Next.js Middleware requires this config export
export const config = {
  matcher: '/stripe-ios/:path*',
}