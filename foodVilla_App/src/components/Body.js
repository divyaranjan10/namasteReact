import { restrauntList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");    
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    const isOnline = useOnline();
    if(!isOnline){
        return <h1>Offline, please check your internet connection.</h1>
    }

    //conditional rendering
    // if restaurant is empty => shimmer UI
    // if not empty => Actual UI
    
    // not render component (Early return)
    if(!allRestaurants) return null;

    return (allRestaurants.length == 0)?<Shimmer/>:(
        <>
            <div className="search-container p-5 bg-pink-50 my-5">
            <input
                type="text"
                className="focus:bg-green-50 p-2 m-2"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button 
                className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-red-700"
                onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }}
                >
                    Search
                </button>
            <input value={user.name} onChange={(e)=>setUser({
                name: e.target.value,
                email: "newEmail@gmail.com" 
            })}/>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    );
                })}
            </div>
        </>
        
    );
};

export default Body;