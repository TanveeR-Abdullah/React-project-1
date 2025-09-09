import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import FoodItem from "./FoodItem"

function FoodDisplay({category}) {

    const { food_list } = useContext(StoreContext)

    return (
        <div>
            <h2>Top dishes on your area</h2>
            <div>
                {food_list.map((item, index) => {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={100} image={item.image} />
                })}
            </div>



        </div>
    )
}

export default FoodDisplay;
