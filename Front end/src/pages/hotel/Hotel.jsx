import './hotel.css'
import Header from "../../components/header/Header.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useState } from 'react';
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.trvl-media.com/lodging/1000000/530000/522900/522878/551d85d2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    },
    {
      src: "https://www.pchotels.com/assets/images/Pearl-khi-new.png",
    },
    {
      src: "https://www.pchotels.com/assets/images/85_ADM_7791_2_3-2.png",
    },
    {
      src: "https://www.kayak.com/rimg/kimg/c6/e2/73e61c90e2f3853d.jpg?width=836&height=607&crop=true",
    },
    {
      src: "https://www.kayak.com/rimg/himg/9b/f1/70/expedia_group-154559-1e1ec99b-548567.jpg?width=836&height=607&crop=true",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhArqCYq3bBJLkNi3ASDofDDekweknqwBaA&s"
    }
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
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
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow left"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow right"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Pearl Continental Hotel Karachi</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Club Rd, Civil Lines, Karachi, Pakistan</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 300m from city center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over PKR 30,000 and get complimentary airport transfer
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Experience luxury in the heart of Karachi</h1>
              <p className="hotelDesc">
                Pearl Continental Karachi offers 5-star luxury accommodations with
                spacious rooms, modern amenities, and impeccable service. Enjoy fine
                dining at multiple on-site restaurants, relax in the spa, or take a
                dip in the outdoor pool. Located in Civil Lines, the hotel is just
                minutes away from major business districts and attractions. Each room
                includes free Wi-Fi, flat-screen TVs, minibars, and elegant decor.
                The hotel also provides airport shuttle service and 24/7 room service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Karachi, this property has an
                excellent location score of 9.4!
              </span>
              <h2>
                <b>PKR 270,000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>

  )
}

export default Hotel


