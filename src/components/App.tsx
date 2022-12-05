import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Recipes from 'components/Recipes'
import Search from 'components/Search'
import Header from './Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  )
}

export default App
