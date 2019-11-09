# react-useintersection

## Description

**react-useintersection** is a custom React Hook that allows for initializing [IntersectionObserver](mdn) on any node ref. With the `IntersectionanchorObserver` returned from the hook, components can be styled on the fly or related JavaScript behavior can be triggered.

Be aware of the [browser compatiblity](https://caniuse.com/#feat=intersectionobserver) of `IntersectionObserver`, namely that IE11 does not support it. If necessary, consider using the `intersection-observer` package for a polyfill.

## Installation

```bash
npm i 'react-useintersection'
```

## Usage

Here's an example of how you can use `IntersectionObserver` to track when the user has scrolled from the top of the page, but this is just a simple example of how powerful `IntersectionObserver` is. Visit the [MDN docs](mdn) for ideas, including lazy loading of images, infinite scrolling, and others.

This specific example is how the [author of this package](https://serra.allgood.dev) achieves a menu bar that is transparent while at the top of the page and transitions to opaque when the user scrolls down. Check out the [source of xer site](https://git.allgood.dev/jump_spider/allgood) to get the full context including CSS.

```javascript
import React, { useEffect, useRef } from 'react'
import useIntersection from 'react-useintersection'

import MenuBar from './MenuBar'

const Layout = ({ children }) => {
  const anchor = useRef(null)
  const [setNode, anchorObserver] = useIntersection()

  useEffect(() => {
    setNode(anchor.current)
  })

  return (
    <>
      <div id="top-of-page-anchor" ref={anchor} />
      <MenuBar isAtTop={anchorObserver.isIntersecting} />
      {children}
    </>
  )
}
```

Astute readers may be concerned about memory leaks; efforts have been made to nip potential leaks in the bud, namely by using `[node, options.root, options.rootMargin, options.threshold]` as the second argument within the `useEffect` of `useIntersection`.

## License

Implementation based on code samples by [Justin Travis Waith-Mair](travis) from his [Medium article](medium) and used with permission. All original code is released under the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0), a copyleft written with the intent to be a more legally defensible version of the MIT license.

## Contributing

Contributions are welcome in the form of reporting issues and submitting pull requests. Contributors agree to follow the Code of Conduct outlined in CODE_OF_CONDUCT.md.

[mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

[medium]: https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

[travis]: https://twitter.com/want2code
