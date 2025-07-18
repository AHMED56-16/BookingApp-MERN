import './hotel.css'
import Header from "../../components/header/Header.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useContext, useState } from 'react';
import useFetch from "../../hooks/useFetch.js"
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import Reserve from '../../components/reserve/Reserve.jsx';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`)
  const {user}= useContext(AuthContext)
  const { dates, options } = useContext(SearchContext)
  const navigate = useNavigate()
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate)


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "Loading, Please wait :=)" : <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow left" onClick={() => handleMove("l")} />
            <div className="sliderWrapper"><img src={data?.photos[slideNumber]} alt="" className="sliderImg" /></div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow right" onClick={() => handleMove("r")} />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data?.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data?.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location - {data?.distance}m from city center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over PKR {data?.cheapestPrice} and get complimentary airport transfer
          </span>
          <div className="hotelImages">
            {data?.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data?.title}</h1>
              <p className="hotelDesc">{data?.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Karachi, this property has an
                excellent location score of 9.4!
              </span>
              <h2>
                <b>PKR {days * data.cheapestPrice * options?.room}</b> ({days} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>

  )
}

export default Hotel


