export function wait(): Promise<void>;
export function wait(milliseconds: number): Promise<void>;
export function wait(milliseconds = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}