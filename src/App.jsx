
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './pages/Home/Footer'
import Menu from './pages/Menu/Menu'
import Mobileapp from './pages/Mobile app/Mobileapp'



const App = () => {
  return (
    <>
      <div className='w-7xl m-auto'>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='Mobileapp'element={<Mobileapp/>}/>
          <Route path='/order' element={<PlaceOrder />} />

        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
