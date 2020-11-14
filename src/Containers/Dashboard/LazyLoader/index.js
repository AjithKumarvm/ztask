import { createRef, useEffect } from 'react'
import IntersectionHandler from '../../../Lib/intersection'
import { useDashboard } from '../../../Stores/DashboardStore'
import Loader from '../../../Components/Loader'

const isElementInViewport = rect => {
  if (!rect) return
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left <
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */ &&
    rect.top <
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */
  )
}

const LazyLoader = () => {
  const [state, actions] = useDashboard()
  const { isLoading, showLazyLoader } = state
  const btnRef = createRef()
  let intersection
  useEffect(() => {
    // actions.updateCustomers()
    intersection = new IntersectionHandler(btnRef.current)
    intersection.bind({
      callback: test => {
        console.log('callback', isLoading, showLazyLoader, test)
        actions.updateCustomers()
      }
    })
  }, [])
  useEffect(() => {
    const el = btnRef?.current?.getBoundingClientRect()
    if (!isLoading && isElementInViewport(el)) {
      console.log('api call')
      //   isLoading && el && console.log('enter', el, isElementInViewport(el))
      actions.updateCustomers()
    }
  })
  if (!showLazyLoader) return null
  return (
    <div ref={btnRef}>
      <Loader />
    </div>
  )
}

export default LazyLoader
