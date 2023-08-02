import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './components/Header'
import Product from './pages/Product'


const Root = () => {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root;