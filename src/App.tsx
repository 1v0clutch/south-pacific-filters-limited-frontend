import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
//Todo: test

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/products/:category/:productName" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
