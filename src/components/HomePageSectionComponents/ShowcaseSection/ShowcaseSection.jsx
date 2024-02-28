import React from "react";
import "./ShowcaseSection.css";
import Image from "next/image";
// import showcaseImg from "../../../../assets/textile-waste-1.jpg";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
// import showcaseImg2 from "../../../../assets/black-and-white-cardigan-sweater-close-up-236028.jpg";
import Slider from "react-slick";

const ShowcaseSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="showcase_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="showcase_section_content">
                <p className="">Lorem ipsum dolor sit amet.</p>
                <h1 className="title mt-5">
                  <span className="highlight_title">Everything</span> you
                  <br />
                  can imagine <span className="highlight_title">is real</span>
                </h1>
                <p className="mt-4">
                  Textile recycling is good for both, environmental and economic
                  benefits. It avoids many polluting and energy-intensive
                  processes that are used to make textiles from fresh materials.
                </p>
                <small>
                  Our company was founded almost a century ago, but we’re just
                  at the start of the journey toward creating a more
                  sustainable, circular textile business model.
                </small>
                <div className="btn_container mt-5">
                  <button type="">Get started</button>
                  <button className="learn_more">Learn more</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="showcase_img_container">
                {/* <Slider {...settings} className="slider"> */}
                {/* <Image className="showcase_img" src={showcaseImg} alt="" /> */}
                {/* <Image className="showcase_img" src={showcaseImg} alt="" /> */}
                {/* </Slider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BusinessInfo />
    </>
  );
};

export default ShowcaseSection;
