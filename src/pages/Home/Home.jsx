import React, { useState } from 'react'
import Header from './Header'
import ExploreMenu from '../../Component/ExploreMenu'
import FoodDisplay from '../../Component/FoodDisplay'


function Home() {
    const [category , setCategory ] = useState("All")


  return (
    <div>
      <Header/>
      <ExploreMenu category ={category} setCategory={setCategory} />
      <FoodDisplay category ={category} />


    </div>
  )
}

export default Home
