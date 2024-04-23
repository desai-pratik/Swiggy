import React from "react";

export const RestrorentCard = (props) => {
  const {resData} = props;
  const { name, cloudinaryImageId, availability, cuisines, avgRatingString } = resData
  return (
    <>
      <div data-testid="resCard" className="m-4 rounded-lg shadow overflow-hidden">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          className="h-15 w-100"
          alt="..."
        />
        <div className="p-5">
          <h5 className="font-bold">{name}</h5>
          <span className="card-text">Availability : {availability ? 'Available' : 'Not Available'}<br /> </span>
          <strong>Rating : {avgRatingString}</strong><br />
          <span>{cuisines.join(' , ')}</span> 
        </div>
      </div>
    </>
  );
};


export const withOpenLable = () => {
  return (props) => {
    return (
      <div>
        <span className="absolute bg-black ms-6 mt-2 px-2 text-white font-bold">Opened</span>
        <RestrorentCard {...props} />
      </div>
    )
  }
}




