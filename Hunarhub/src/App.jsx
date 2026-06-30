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

const Home = () => (
  <>
    <Firstpage/>
    <ShopByOccasion/>
    <Items/>
    <PopularProduct/>
    <Sell/>
    <Lastone/>
  </>
)

const App = () => {
  return (
    <div className='bg-[#fbf6ef]'>
      <Movingbar/>
      <Navbar/>
      <Category/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potter" element={<CategoriesBox />} />
      </Routes>
        <Lastone/>
    </div>
  )
}

export default App
