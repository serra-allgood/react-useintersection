export type HookUseIntersectionArgs = {
  root?: null | Element,
  rootMargin?: string,
  threshold?: number
}

export type HookUseIntersectionReturn = [
  React.Dispatch<React.SetStateAction<any>>,
  IntersectionObserverEntry | null
]
