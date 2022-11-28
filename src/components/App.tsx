import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Recipes from 'components/Recipes'
import Search from 'components/Search'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  )
}

export default App
