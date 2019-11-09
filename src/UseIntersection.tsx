import React, { useEffect, useRef, useState } from 'react'

import * as Types from './types'

const useIntersection = (options: Types.HookUseIntersectionArgs = {}): Types.HookUseIntersectionReturn => {
  const [entry, setEntry]: [IntersectionObserverEntry, React.Dispatch<React.SetStateAction<any>>] = useState({} as IntersectionObserverEntry)
  const [node, setNode]: [null | Element, React.Dispatch<React.SetStateAction<any>>] = useState(null)
  const observer: React.MutableRefObject<null | IntersectionObserver> = useRef(null)

  if (window && !('IntersectionObserver' in window)) {
    require('intersection-observer')
  }

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      { root: options.root, rootMargin: options.rootMargin, threshold: options.threshold }
    )

    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, options.root, options.rootMargin, options.threshold])

  return [setNode, entry]
}

export default useIntersection
