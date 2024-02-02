"use client";

import styled from "styled-components";

const Title = styled.p`
  font-family: "Comic Sans MS";
`;

const Layout = ({ children }) => (
  <>
    <Title>Microsite</Title>
    <main>{children}</main>
  </>
);

export default Layout;
