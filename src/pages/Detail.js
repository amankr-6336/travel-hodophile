import React from "react";
// import Card from "../components/Card";
import Slider from "../components/Slider";
import "./Detail.scss";
// import manali from "../assets/manali.jpg";
// import shimla from "../assets/shimla.jpg";
import kullu from "../assets/kullu.jpg";
import dal from "../assets/dal.jpg";
// import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import Right from "../components/Right";
import Left from "../components/Left";
import hfour from "../assets/shimla.jpg";
import ld from "../assets/ld.jpg";
import Navbar from "../components/Navbar";

function Detail() {
  const slides = [
    {
      url: "http://localhost:3000/hp.jpg",
      title: "Himachal pradesh",
      description: "A destination for all seasons and all reasons",
    },
    {
      url: "http://localhost:3000/ut.jpg",
      title: "Uttrakhand",
      description: "A destination for all seasons and all reasons",
    },
    {
      url: "http://localhost:3000/ld.jpg",
      title: "Ladakh",
      description: "A destination for all seasons and all reasons",
    },
    {
      url: "http://localhost:3000/jk.jpg",
      title: "Jammu & Kashmir",
      description: "A destination for all seasons and all reasons",
    },
  ];

  // const navigate = useNavigate();

  return (
    <div className="north">
      <div className="navcontainer">
        <Navbar />
      </div>
      <div className="slidercontainer">
        <Slider slides={slides} />
      </div>

      <div className="rightcontainer">
        <Heading />
        <Right title="Himachal Pradesh" image={hfour} />
        <Left title="Uttrakhand" image={kullu} />
        <Right title="Ladakh" image={ld} />
        <Left title="Jammu & Kashmir" image={dal} />
        <Right title="Offbeats" image={kullu} />
      </div>
    </div>
  );
}

export default Detail;
