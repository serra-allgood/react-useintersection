import React, { PropsWithChildren, useEffect, useRef } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { mount } from 'enzyme'
// require('intersection-observer')

import useIntersection from '../'

describe('useIntersection', () => {
  const windowIntersectionObserver = globalThis.IntersectionObserver
  let mockCallback: Function

  beforeAll(() => {
    (globalThis.IntersectionObserver as any) = function (this: IntersectionObserver, callback: Function) {
      mockCallback = callback
      this.observe = () => {}
      this.disconnect = () => {}
    }

    debugger
  })

  afterAll(() => {
    globalThis.IntersectionObserver = windowIntersectionObserver
  })

  test('entry passing', () => {
    const ChildComponent: React.FC<{ entry: IntersectionObserverEntry | null }> = ({ entry }) => (
      <div id='test-node'>{entry ? entry.intersectionRatio : ''}</div>
    )
    const ParentComponent: React.FC<PropsWithChildren<{}>> = () => {
      const [setNode, entry] = useIntersection()
      const anchor = useRef(null)

      useEffect(() => {
        setNode(anchor.current)
      })

      return (
        <>
          <div id='top-of-page-anchor' ref={anchor} />
          <ChildComponent entry={entry} />
        </>
      )
    }
    const mockEntry = { intersectionRatio: 0.5, isIntersecting: true } as IntersectionObserverEntry
    const wrapper = mount(<ParentComponent />)
    expect(wrapper.find('#test-node').text()).toBe('')

    ReactTestUtils.act(() => {
      mockCallback([mockEntry])
    })

    expect(wrapper.find('#test-node').text()).toBe('0.5')
  })
})
