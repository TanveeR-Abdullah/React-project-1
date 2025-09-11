import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets"
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";




function FoodItem({ _id, name, description, price, image }) {

    // const [itemCount, setItemCount] = useState(0);
    const {  cartItem, addToCart, removeFromCart } = useContext(StoreContext);


    return (

        <div className="">
            <div>
                <img src={image} />

                {
                    !cartItem[_id] ? (<img onClick={() =>{addToCart(_id)}} src={assets.add_icon_white}  />)
                        : (
                            <div>
                                <img onClick={() => {removeFromCart(_id)}} src={assets.remove_icon_red}  />
                                <p>{cartItem[_id]}</p>
                                <img onClick={() =>{addToCart(_id)}}src={assets.add_icon_green}  />
                            </div>
                        )
                }



            </div>
            <div>
                <div>
                    <p>{name}</p>
                    <img src={assets.rating_starts} />

                </div>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;
