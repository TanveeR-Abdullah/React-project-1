import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

function ExploreMenu({category, setCategory}) {
    return (
        <div className='flex flex-col gap-5 '>
            <h1 className='w-xl size-15 text-4xl p-5 '> Exploe our Menu</h1>
            <p className='left-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, rem, autem,
                deserunt repellendus maxime dignissimos reprehenderit voluptatem reiciendis obcaecati
                consequatur praesentium ipsam odio. Eligendi illum, earum itaque eos expedita iusto?</p>
            <div className='flex justify-between  gap-7 text-center ' >
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} >
                            <img  className={`${category === item.menu_name ? "" : ""} cursor-pointer rounded-full w-50 size-35`} src={item.menu_image}  />
                            <p className='text-amber-500 text-bold ' >{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr className=" h-1 bg-gray-300 border-none  " />
        </div>
    )
}


export default ExploreMenu
