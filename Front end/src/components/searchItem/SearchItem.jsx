import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://images.trvl-media.com/lodging/1000000/530000/522900/522878/551d85d2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">PC Hotel Karachi</h1>
        <span className="siDistance">2.5km from center</span>
        <span className="siTaxiOp">Complimentary airport shuttle</span>
        <span className="siSubtitle">
          Deluxe Room with City View and Air Conditioning
        </span>
        <span className="siFeatures">
          Entire room • 1 bathroom • 30m² • 1 king bed
        </span>
        <span className="siCancelOp">Free cancellation available</span>
        <span className="siCancelOpSubtitle">
          Book now and cancel anytime before check-in!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Very Good</span>
          <button>8.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$145</span>
          <span className="siTaxOp">Taxes and fees included</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
