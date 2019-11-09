import React, { useEffect, useRef, useState } from 'react'

import * as Types from './types'

const useIntersection = (
  { root = null, rootMargin, threshold = 0 }: Types.UseIntersectionArgs
): Types.UseIntersectionReturn => {
  const [entry, setEntry]: [
    {} | IntersectionObserverEntry,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState({})
  const [node, setNode]: [
    null | Element,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState(null)
  const observer: React.MutableRefObject<null | IntersectionObserver> = useRef(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      { root, rootMargin, threshold }
    )

    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  return [setNode, entry]
}

export default useIntersection
