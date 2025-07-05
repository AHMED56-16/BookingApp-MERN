import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_2580,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img src="https://blog.palisadestahoe.com/wp-content/uploads/2021/03/Downtown-Reno-Arch-01-2048x1365.jpg" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507604-austin.jpg" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;