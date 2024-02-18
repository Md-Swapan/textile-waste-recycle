import React from "react";
import "./ShowcaseSection.css";
import Image from "next/image";
import showcaseImg from "../../../../assets/textile-waste-1.jpg";
// import showcaseImg2 from "../../../../assets/black-and-white-cardigan-sweater-close-up-236028.jpg";
// import Slider from "react-slick";

const ShowcaseSection = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   // nextArrow: <NextArrow />,
  //   // prevArrow: <PrevArrow />,
  // };


  return (
    <>
      <div className="showcase_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="showcase_section_content">
                <p className="">Lorem ipsum dolor sit amet.</p>
                <h1 className="title mt-5">
                  Everything you
                  <br />
                  can imagine <span className="">is real</span>
                </h1>
                <p className="mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fugit laudantium eum quaerat, quasi molestias deserunt ipsa blanditiis autem neque deleniti error a. Iste placeat modi inventore asperiores in molestias, quibusdam excepturi itaque deleniti quis provident laudantium corrupti nulla! Nemo culpa quaerat aliquid tempora deserunt quis in, explicabo voluptatibus at.
                </p>
                <div className="btn_container mt-5">
                  <button type="">Get started</button>
                  <button className="">Learn more</button>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="showcase_img_container">
              {/* <Slider {...settings} className="slider"> */}
                <Image className="showcase_img" src={showcaseImg} alt="" />
                {/* <Image className="showcase_img" src={showcaseImg} alt="" /> */}
              {/* </Slider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowcaseSection;
