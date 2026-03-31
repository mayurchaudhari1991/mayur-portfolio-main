declare module "*gsap-public/esm/SplitText.js" {
  export default class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: any, vars?: Record<string, any>);
    revert(): SplitText;
    split(vars?: Record<string, any>): SplitText;
  }
}

declare module "*gsap-public/esm/ScrollSmoother.js" {
  export default class ScrollSmoother {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}
