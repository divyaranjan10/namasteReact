import { restrauntList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    
    return filterData;
}

//using keys(best practice) to give unique identification to the component
const Body = () =>{
    //searchText is a local state variable
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");    //to create state variables

    //useEffect is a hook (also a function) in React that takes a callback function
    //the callback function will only be called when the useEffect wants to call it 
    //so when useEffect will be called into action? -> every time the component gets rendered, the useEffect will get into action 
    // at last

    useEffect(() => {
        //will do fetching here...
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //conditional rendering
    // if restaurant is empty => shimmer UI
    // if not empty => Actual UI
    
    // not render component (Early return)
    if(!allRestaurants) return null;

    if(filteredRestaurants.length == 0){
        return <h1>Oops! No Restaurant Found</h1>
    }

    return (allRestaurants.length == 0)?<Shimmer/>:(
        <>
            <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button 
                className="search-btn"
                onClick={() => {
                    //filter on click 
                    const data = filterData(searchText, allRestaurants);
                    //update the state - restaurants
                    setFilteredRestaurants(data);
                }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                })}
            </div>
        </>
        
    );
};

export default Body;