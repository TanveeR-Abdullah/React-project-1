
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'



const App = () => {
  return (
    <div className='w-7xl m-auto'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/order' element = {<PlaceOrder/>} />

          
        </Routes>





    </div>
  )
}

export default App
