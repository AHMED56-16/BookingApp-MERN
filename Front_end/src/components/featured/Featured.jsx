import useFetch from "../../hooks/useFetch.js";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Karachi,Islamabad,Lahore")
  console.log(data);
  return (
    <div className="featured">
      {loading ? "Loading, Please wait :=)" : <><div className="featuredItem">
        <img src="https://tse3.mm.bing.net/th/id/OIP.8JnU5chZhXlnnnUi4Itd8wHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Karachi</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

        <div className="featuredItem">
          <img src="https://img.freepik.com/premium-photo/aerial-shot-islamabad-capital-city-pakistan-showing-landmark-shah-faisal-mosque_1080045-9.jpg" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Islamabad</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://1.bp.blogspot.com/-QtTsCA69PbA/Xpr0sAX8aBI/AAAAAAAABzs/gnT_TmFWykY3mafeDPjnn2bf-BIyV1cdwCLcBGAsYHQ/s1600/lahore-2299773_1920.jpg" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Lahore</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div></>}
    </div>
  );
};

export default Featured;