import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_cdn_link } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    //how to read a dynamic URL Params
    const {resId} = useParams();
    const restaurant = useRestaurant(resId);

    return (!restaurant)?<Shimmer/>:(
        <div className="menu">
            <div>
                <h1>Restaurant ID: {resId}</h1>
                <h2>{restaurant[0]?.card?.card?.info?.name}</h2>
                <img src={img_cdn_link + restaurant[0].card.card.info.cloudinaryImageId}></img>
                <h3>{restaurant[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant[0]?.card?.card?.info?.slugs?.city}</h3>
                <h3>{restaurant[0]?.card?.card?.info?.avgRating} Stars</h3>
                <h3>{restaurant[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards??restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0].itemCards).map((item)=>
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
                </ul>
            </div>
        </div>
        
        
    );
};

export default RestaurantMenu;