import React from "react";
import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
import LoadingSkelton from "../loadingSkelton/LoadingSkelton";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    " https://images.pexels.com/photos/20705879/pexels-photo-20705879/free-photo-of-opened-doors-to-swimming-pool-in-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20697900/pexels-photo-20697900/free-photo-of-gray-apartment-building-in-city.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3280801/pexels-photo-3280801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="pList">
      {loading ? (
       <LoadingSkelton/>
      ) : (
        <>
         {data && images.map((img,i)=>(
         <div className="pListItem" key={i}>
            <img
              src={img}
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[i]?.type}</h1>
              <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
          </div>))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
