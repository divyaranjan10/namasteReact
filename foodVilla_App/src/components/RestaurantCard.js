import { img_cdn_link } from "../constant";

//object destructuring in JS
const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) => {

    return(
        <div className="card">
            <img src={img_cdn_link + 
            cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} Distance</h4>
        </div>
    );
};

export default RestaurantCard;