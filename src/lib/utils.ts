// Lightweight replacement for clsx + tailwind-merge to avoid external deps in this file.
// This implementation joins class names, filters falsy values, and collapses
// multiple whitespace. It does not perform advanced Tailwind-specific conflict
// resolution but is sufficient for basic usage.
export function cn(...inputs: Array<string | number | boolean | null | undefined | (string | number)[]>) {
  const classes: string[] = []

  for (const input of inputs) {
    if (!input) continue
    if (Array.isArray(input)) {
      for (const v of input) {
        if (v) classes.push(String(v))
      }
      continue
    }
    classes.push(String(input))
  }

  return classes
    .join(' ')
    .split(/\s+/)
    .filter(Boolean)
    .join(' ')
}
