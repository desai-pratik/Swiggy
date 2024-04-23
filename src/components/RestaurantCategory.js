import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItem,setshowIndex }) => {

    const showItems = () => {
        setshowIndex()
    }
    return (
        <>
            <div className="flex justify-between p-2 mt-3 bg-slate-300 cursor-pointer" onClick={showItems}>
                <h3 className="font-bold">{data?.title} ({data.itemCards.length}) </h3>
                <h3 className="font-bold"> 🔽 </h3>
            </div>
            <div>
              {showItem && <ItemList items={data.itemCards} />}
            </div>
        </>
    );
}

export default RestaurantCategory;