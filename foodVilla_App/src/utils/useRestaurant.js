import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    //get data through API
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data.cards);
    }

    //return data
    return restaurant;
}

export default useRestaurant;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229