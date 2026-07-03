import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Movingbar from './Component/Movingbar'
import Navbar from './Component/Navbar'
import Category from './Component/Category'
import Firstpage from './Component/Firstpage'
import ShopByOccasion from './Component/ShopByOccasion'
import Items from './Component/Items'
import Sell from './Component/Sell'
import PopularProduct from './Component/PopularProduct'
import Lastone from './Component/Lastone'
import CategoriesBox from './Component/CategoriesBox'
import SignInSignUp from './Component/SignInSignUp'
import Cart from './Component/Cart'
import SellingProd from './Component/SellingProd'

const Home = () => (
  <>
    <Firstpage />
    <ShopByOccasion />
    <Items />
    <PopularProduct />
    <Sell />

  </>
)

const MainLayout = () => (
  <div className='bg-[#fbf6ef]'>
    <Movingbar />
    <Navbar />
    <Category />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:catName" element={<CategoriesBox />} />
      <Route path="/signin" element={<SignInSignUp />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    <Lastone />
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path="/sell" element={<SellingProd />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  )
}

export default App

