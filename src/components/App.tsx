import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from 'components/Header'
import SideMenu from 'components/SideMenu'
import Footer from 'components/Footer'

const Search = lazy(() => import('components/Search'))
const Recipes = lazy(() => import('components/Recipes'))

function App() {
  return (
    <Router>
      <Header />
      <SideMenu />
      <Suspense>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
