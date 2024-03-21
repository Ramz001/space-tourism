import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Spinner from './components/spinner/Spinner'

const Home = lazy(() => import('./components/home/Home'))
const Destination = lazy(() => import('./components/destination/Destination'))
const Crew = lazy(() => import('./components/crew/Crew'))
const Technology = lazy(() => import('./components/technology/Technology'))
const Error = lazy(() => import('./components/error/Error'))

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  )
}

export default App
