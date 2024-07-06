import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="searchItem" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} m from center</span>
        <span className="siTaxiOp">$120/night</span>
        <span className="siSubtitle">8.9 Excellent</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">free cancellation</span>

        <span className="siCancelOpSubtitle">
          Cancel before 12:00 PM on 12th June
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxed and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
