import React from "react";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchManu();
    }, [])

    const fetchManu = async () => {
        const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.18880&lng=72.82930&restaurantId=${resId}`)
        const json = await data.json();
        setresInfo(json.data)
        //console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        // console.log(resInfo?.cards[0]?.card?.card?.info);
    }
    return resInfo;
}
export default useRestaurantMenu;