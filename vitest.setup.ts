import "@testing-library/jest-dom/vitest";
import { createElement } from "react";
import type { ImgHTMLAttributes } from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

vi.mock("next/image", () => ({
  default: (
    inputProps: ImgHTMLAttributes<HTMLImageElement> & {
      src?: string | { src?: string };
      fill?: boolean;
      priority?: boolean;
      placeholder?: string;
      blurDataURL?: string;
      unoptimized?: boolean;
    },
  ) => {
    const {
      alt,
      src,
      fill,
      priority,
      placeholder,
      blurDataURL,
      unoptimized,
      ...props
    } = inputProps;

    void fill;
    void priority;
    void placeholder;
    void blurDataURL;
    void unoptimized;

    return createElement("img", {
      alt,
      src: typeof src === "string" ? src : src?.src ?? "",
      ...props,
    });
  },
}));
