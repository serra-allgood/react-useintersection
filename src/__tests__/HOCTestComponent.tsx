import React, { useEffect, useRef } from 'react'

import useIntersection from '../'
import { ObserverEntry } from '../types'

const HOCTestComponent = (
  Component: React.FC<{ entry: ObserverEntry | null }>
): React.ReactElement => {
  const [setNode, entry] = useIntersection({ root: null, rootMargin: '0px', threshold: 0 })
  const anchor = useRef(null)

  useEffect(() => {
    setNode(anchor)
  }, [])

  return (
    <>
      <div id="top-of-page-anchor" ref={anchor} />
      <Component entry={entry} />
    </>
  )
}

export default HOCTestComponent
