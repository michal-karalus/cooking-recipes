import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Search = lazy(() => import('components/Search'))
const Recipes = lazy(() => import('components/Recipes'))

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
