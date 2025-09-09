import React from 'react'

function Header() {
  return (

    <div className="bg-[url('/header_img.png')] bg-no-repeat  bg-cover relative h-[650px]   ">
        <div className=" flex absolute flex-col items-start gap-1.5 bottom-20 left-27 " >
            <h2 className='w-xl text-8xl text-white ' >Order your favorite food here </h2>
            <p className='text-white w-xl size-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Saepe soluta nihil dolore labore debitis id, numquam aperiam, libero inventore praesentium
                nostrum quod, odio placeat sint sunt necessitatibus dolor expedita ullam.</p>
            <button className=" bg-white rounded-full w-30 h-10  border-2 border-red-400   " >View Menu</button>
        </div>


    </div>
  )
}

export default Header
