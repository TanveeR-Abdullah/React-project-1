
import { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const NavBar = () => {


  let [menu, setmenu] = useState("menu");







  return (
    <div className='px-0 py-6 flex justify-between items-center '>
      <img className='w-150px' src={assets.logo} />
      <ul className='flex gap-6 text-red-500 font-bold '>

        <li onClick={() => setmenu = ("home")}  > Home</li>
        <li onClick={() => setmenu = ("menu")} > Menu</li>
        <li onClick={() => setmenu = ("mobile-app")} > Mobile app</li>
        <li onClick={() => setmenu = ("contact")} > Contact us</li>
      </ul>

      <div className='flex gap-8 items-center '>
        <img src={assets.search_icon} />
        <div className='reletive'> 
          <img src={assets.basket_icon} />
            <div className='absolute bg-red-600 rounded-full  w-2 h-2 top-5  '></div>
        </div>

        <button 
        className='bg-transparent duration-300 text-
          [18px] py-2 px-4 border-1 rounded-4xl
         border-red-500 cursor-pointer hover:bg-red-500 '> sign in </button>
      </div>



    </div>
  )
}

export default NavBar
