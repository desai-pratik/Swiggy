import React, { useState } from "react";
import Shimmar from "./Shimmar";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setshowIndex]=useState(0);

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmar />;
    }
    const { name, cloudinaryImageId, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="menu w-6/12 mx-auto">
            <img className="w-100 mx-auto mt-10" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <h2 className="text-3xl text-center my-2">{name}</h2>
            <p className="text-xl text-center my-2">{cuisines} - {costForTwoMessage}</p>
            {category.map((category, index) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItem={index == showIndex ? true :false} setshowIndex={()=>setshowIndex(index)}  />)}
        </div>
    )
}
export default RestaurantMenu;