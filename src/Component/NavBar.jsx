
import { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const NavBar = () => {


  let [menu, setMenu] = useState("home");



  return (
    <div className='px-0 py-6 flex justify-between items-center '>
      <img className='w-150px' src={assets.logo} />
      <ul className='flex gap-6 text-red-500 font-bold '>
        <p>{console.log(setMenu)}</p>

        <li onClick={() => setMenu("home")} className={`${menu === "home" ? "border-b" : ""} cursor-pointer`}  > Home</li>
        <li onClick={() => setMenu("menu")} className={`${menu === "menu" ? "border-b" : ""} cursor-pointer`}> Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={`${menu === "mobile-app" ? "border-b" : ""} cursor-pointer`}> Mobile app</li>
        <li onClick={() => setMenu("contact-us")} className={`${menu === "contact-us" ? "border-b" : ""} cursor-pointer`}> Contact us</li>
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
