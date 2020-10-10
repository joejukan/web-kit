import { ok } from "./ok";

export function capitalize (text: string): string {
  if (ok(text)) {
    return text.replace(/^[a-z]/, (v) => v.toUpperCase());
  }
  return text;
}