import { assets } from "../assets/frontend_assets/assets"




function FoodItem({_id, name, description, price, image}) {


    return (

        <div>
            <div>
                <img src={image} />
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
