export type UseIntersectionArgs = {
  root: null | Element,
  rootMargin: string,
  threshold: number
}

export type ObserverEntry = {} | IntersectionObserverEntry

export type UseIntersectionReturn = [
  React.Dispatch<React.SetStateAction<any>>,
  ObserverEntry | null
]
