import React from 'react'

function Header() {
  return (

    <div className="bg-[url('/header_img.png')] bg-no-repeat bg-contain  relative h-screen   ">
        <div className=" flex absolute flex-col items-start gap-1.5 top-80 left-27 " >
            <h2 className='' >Order your favorite food here </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe soluta nihil dolore labore debitis id, numquam aperiam, libero inventore praesentium nostrum quod, odio placeat sint sunt necessitatibus dolor expedita ullam.</p>
            <button>View Menu</button>
        </div>


    </div>
  )
}

export default Header
