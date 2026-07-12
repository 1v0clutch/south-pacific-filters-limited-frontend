import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import AirFiltersCategory from './pages/products/AirFiltersCategory'
import FilterMediaCategory from './pages/products/FilterMediaCategory'
import ProductTypeVariants from './pages/products/ProductTypeVariants'
import ProductDetail from './pages/products/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/air-filters" element={<AirFiltersCategory />} />
        <Route path="/products/filter-media" element={<FilterMediaCategory />} />
        <Route path="/products/variants/:productType" element={<ProductTypeVariants />} />
        <Route path="/products/:category/:productType/:variantId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
