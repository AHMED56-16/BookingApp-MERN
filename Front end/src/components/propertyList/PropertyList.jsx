import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/bg_luxury/869918c9da63b2c5685fce05965700da5b0e6617.jpg" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://helium.privateproperty.co.za/live-za-images/property/1753/37/10875753/images/property-10875753-37403968_e.jpg" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmODviBNJHMyo7Yq2_30WjsURN6hV6NfWlQQ&s" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/bg_villas_new/b765353732f8ec1ccac1e0d62786c37dc1c80ae7.jpg" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://cdn.sanity.io/images/ud45da4u/boyne-mountain/9e4e39250b95e90ae1b734af2dbde36a7451fd1e-2100x1400.jpg?w=1920&q=70&auto=format" alt="" className="pListImg"/>
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;