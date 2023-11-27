import React from "react";
import './Home.css'
import logo from '../assets/logo_1.png'
import { Link } from "react-router-dom";

const About = () => {
  const scroll = ()=>{
    console.log(window.screenTop);
  }
  return (
    <>
      <div onScroll={scroll} className="welcome">
        <div className="px-5 h-100 w-100 wellcome">
          <div className="w-50 h-100 px-5 d-flex flex-column justify-content-center">
            <h1 className="text-white">Welcome to <img src={logo} width={'90px'} alt="" />.</h1><br />
            <p className="text-white">Elixir is a brand geared towards personal growth and empowerment.</p>
            <span className="text-white">Discover a world of transformation through our skill-building resources, enlightening books, and insightful podcasts. Elixir is your partner in the journey of unlocking your potential, cultivating meaningful relationships, and achieving financial prosperity.</span>
            <Link className="text-white">Learn more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
// 09068294378