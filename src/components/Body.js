import React from "react";
import { useState, useEffect } from "react";
import { RestrorentCard, withOpenLable } from "./RestrorentCard";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";

const Body = () => {
  const [listfrestorent, setlistfrestorent] = useState([]);
  const [Filterfrestorent, setFilterfrestorent] = useState([]);
  const [SearchText, setSearchText] = useState("");

  const RestrorentCardOpen = withOpenLable(RestrorentCard);

  useEffect(() => {
    fechData();
  }, []);

  const fechData = async () => { 
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistfrestorent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterfrestorent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("listfrestorent", listfrestorent)

  return listfrestorent.length === 0 ? (
    <Shimmar />
  ) : (
    <>
      <div className="">
        <div className="">
          <input
            type="search"
            data-testid="searchInput"
            name="search"
            placeholder="Search...."
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
           
          />
          <button  onClick={(e) => {
              setFilterfrestorent(
                listfrestorent.filter((res) =>
                  res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                )
              );
            }}>Search</button>
        </div>

        <div className="flex flex-wrap">
          {Filterfrestorent.map((restrorent) => {
            return (
              <Link
                to={`/restaurant/${restrorent.info.id}`}
                key={restrorent.info.id}
                className="w-3/12"
              >
                {restrorent.info.isOpen ? (
                  <RestrorentCardOpen resData={restrorent.info} />
                ) : (
                  <RestrorentCard resData={restrorent.info} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
