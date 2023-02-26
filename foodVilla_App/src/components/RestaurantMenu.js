import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_cdn_link } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    //how to read a dynamic URL Params
    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + resId);
        const json = await data.json();
        setRestaurant(json.data)
    }

    return (!restaurant)?<Shimmer/>:(
        <div className="menu">
            <div>
                <h1>Restaurant ID: {resId}</h1>
                <h2>{restaurant.name}</h2>
                <img src={img_cdn_link + restaurant.cloudinaryImageId}></img>
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} Stars</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>
                    <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        </div>
        
        
    );
};

export default RestaurantMenu;