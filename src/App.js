import { Suspense, useEffect, lazy } from 'react'
import styles from './App.module.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLoader from './Components/PageLoader'
import Header from './Components/Header'

const Dashboard = lazy(() => import('./Containers/Dashboard/'))
const PageNotFound = lazy(() => import('./Containers/PageNotFound/'))

function App () {
  useEffect(() => {
    console.log('mounted')
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
