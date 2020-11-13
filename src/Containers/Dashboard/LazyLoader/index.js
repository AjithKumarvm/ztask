import { createRef, useEffect } from 'react'
import IntersectionHandler from '../../../Lib/intersection'
import { useDashboard } from '../../../Stores/DashboardStore'
import Loader from '../../../Components/Loader'

const LazyLoader = () => {
  const [state, actions] = useDashboard()
  const { isLoading, showLazyLoader } = state
  const btnRef = createRef()
  let intersection
  useEffect(() => {
    intersection = new IntersectionHandler(btnRef.current)
    intersection.bind({
      callback: (test) => {
        console.log('callback', isLoading, showLazyLoader, test)
        actions.updateCustomers()
      }
    })
  }, [])
  if (!showLazyLoader) return null
  return (
    <div ref={btnRef}>
      <Loader />
    </div>
  )
}

export default LazyLoader
