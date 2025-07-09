import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img src={item?.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} from center</span>
        <span className="siTaxiOp">Complimentary airport shuttle</span>
        <span className="siSubtitle">
          Deluxe Room with City View and Air Conditioning
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation available</span>
        <span className="siCancelOpSubtitle">
          Book now and cancel anytime before check-in!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && 
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        }
        <div className="siDetailTexts">
          <span className="siPrice">PKR{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
