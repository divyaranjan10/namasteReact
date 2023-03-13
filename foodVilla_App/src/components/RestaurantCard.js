import { img_cdn_link } from "../constant";

//object destructuring in JS
const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) => {

    return(
        <div className="w-64 h-96 p-2 m-2 shadow-lg bg-pink-50">
            <img src={img_cdn_link + 
            cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} Distance</h4>
        </div>
    );
};

export default RestaurantCard;