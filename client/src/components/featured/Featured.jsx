import useFetch from "../../hooks/useFetch";
import "./featured.css";
import LoadingSkelton from "../loadingSkelton/LoadingSkelton";

export const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      { loading ? <LoadingSkelton/>:(
        <>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Reno</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Featured;