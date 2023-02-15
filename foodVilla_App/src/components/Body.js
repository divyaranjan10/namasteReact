import { restrauntList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
    );
    
    return filterData;
}

//using keys(best practice) to give unique identification to the component
const Body = () =>{
    //searchText is a local state variable
    const [restaurants, setRestaurants] = useState(restrauntList);
    const [searchText, setSearchText] = useState("");    //to create state variables
    return(
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
                    const data = filterData(searchText, restaurants);
                    //update the state - restaurants
                    setRestaurants(data);
                }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                })}
            </div>
        </>
        
    );
};

export default Body;