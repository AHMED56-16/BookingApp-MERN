import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/46/20/0b/aparthotel-stare-miasto.jpg?w=800&h=500&s=1" alt="" className="fpImg"/>
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://images.trvl-media.com/lodging/1000000/700000/691700/691651/8dddb984.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="" className="fpImg"/>
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://i1.wp.com/portugalconfidential.com/wp-content/uploads/2011/08/Four-Seasons-Lisbon-Almada-Negreiros-Lounge-2-c.jpg?fit=1400%2C875&ssl=1" alt="" className="fpImg"/>
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://media.iceportal.com/59014/photos/78532866_XL/Hilton-Berlin-Lobby.jpg?tr=w-780%2Ch-437%2Cfo-auto" alt="" className="fpImg"/>
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;