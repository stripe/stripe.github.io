/* eslint-disable no-unused-vars */
declare global {
  interface Window {
    Analytics?: {
      viewed(eventName: string): void;
    };
  }
}

export {};
