import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets"




function FoodItem({ _id, name, description, price, image }) {

    const [itemCount, setItemCount] = useState(0);


    return (

        <div className="">
            <div>
                <img src={image} />

                {
                    !itemCount ? (<img onClick={() => setItemCount((prev) => prev + 1)} src={assets.add_icon_white}  />)
                        : (
                            <div>
                                <img onClick={() => setItemCount((prev) => prev - 1)} src={assets.remove_icon_red}  />
                                <p>{itemCount}</p>
                                <img onClick={() => setItemCount((prev) => prev + 1)}src={assets.add_icon_green}  />
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
