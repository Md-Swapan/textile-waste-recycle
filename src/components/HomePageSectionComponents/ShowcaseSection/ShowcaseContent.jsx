import React from "react";
import Image from "next/image";
// import showcaseImg from "../../../../assets/black-and-white-cardigan-sweater-close-up-236028.jpg";
import "./ShowcaseSection.css";

const ShowcaseContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="showcase_section_content">
            <p className="">Brand new</p>
            <h2 className="">
              Everything you
              <br className="" />
              can imagine <span className="">is real</span>
            </h2>
            <p className="">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <a href="/" className="">
                Get started
              </a>
              <a href="/" aria-label="" className="">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="showcase_img_container">
            <Image className="showcase_img" src={showcaseImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContent;

