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
import Productdetail from './Component/Productdetail'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
import SearchPrduct from './Component/SearchPrduct'
import Dashboard from './Component/Dashboard'
import Profile from './Component/Profile'
import Request from './Component/Request'
import MyOrders from './Component/MyOrders'
import AdminDashboard from './Component/AdminDashboard'

import OccasionBox from './Component/OccasionBox'
import ForgetPassword from './Component/ForgetPassword'

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
      <Route path="/occasion" element={<OccasionBox />} />
      <Route path="/occasion/:occName" element={<OccasionBox />} />
      <Route path="/signin" element={<SignInSignUp />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/product/:id" element={<Productdetail />} />
      <Route path="/search/:query" element={<SearchPrduct />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/request/:id" element={<Request />} />
      <Route path="/order" element={<MyOrders />} />

    </Routes>
    <Lastone />
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path="/sell" element={<SellingProd />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/*" element={<MainLayout />} />
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
    </Routes>
  )
}

export default App

