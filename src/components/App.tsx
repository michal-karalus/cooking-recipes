import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Recipes from 'components/Recipes'
import Search from 'components/Search'
import Recipe from 'components/Recipe'

import Header from 'components/Header'
import SideMenu from 'components/SideMenu'

function App() {
  return (
    <Router>
      <Header />
      <SideMenu />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </Router>
  )
}

export default App
