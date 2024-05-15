// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Meal from './Pages/Meal'
import Categories from './Pages/Categories'
import ContactUs from './Pages/ContactUs'
import './App.css'
import CategoryMeals from './Pages/CategoryMeals'
import Area from './Pages/Area'
import AreaMeals from './Pages/AreaMeals'
import Ingradients from './Pages/Ingradients'
import IngradientMeals from './Pages/IngradientMeals'
function App() {

  return (

    <>
    <div className='row'>
      <div className="col-2">
      <Navbar />

      </div>
      <div className="col-1"></div>
      <div className="content col-9">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/area' element={<Area />}></Route>
          <Route path='/area/:areaMeal' element={<AreaMeals />}></Route>
          <Route path='/ingradients' element={<Ingradients />}></Route>
          <Route path='/ingradients/:ingradientMeals' element={<IngradientMeals />}></Route>
          <Route path='/:meal' element={<Meal />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/categories/:categoryMeals' element={<CategoryMeals />}></Route>
          <Route path='/contactUs' element={<ContactUs />}></Route>

        </Routes>
      </div>
    </div>
    {/* <Routes>
      <Route path='/' element={<Navbar />}>

      </Route>
    </Routes>
       */}
    </>
  )
}

export default App
