import React from "react";
import textileWasteImg from "../../../assets/LAROCHE-SHANGHAI-TEXINTEL.jpg";
import textileWasteImg2 from "../../../assets/resize.jpg";
import textileWasteImg3 from "../../../assets/Waste-opener-Margasa-Recycling-at-FILOTEX-Ltd.jpg";
import Image from "next/image";
import "./OfferingWasteManagement.css";

const OfferingWasteMangement = () => {
  return (
    <>
      <div className="global_textile_waste_section">
        <div className="offer_textile_waste_management_content_container">
          <div className="global_textile_waste_content">
            <h1 className="textile_waste_management_title">
              Company Offering all <br />
              Waste Mangement Services
            </h1>
            <div className="global_textile_waste_management_content mt-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium optio voluptates iusto error iste perspiciatis
                repellendus ex! Nobis impedit iure tempora quia recusandae
                voluptatibus saepe reiciendis accusamus voluptates eum,
                doloremque dignissimos quae suscipit nam omnis eius. Nobis
                libero quasi ducimus!
              </p>

              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati corporis temporibus eaque vel at suscipit dolore
                delectus. Nulla, velit sit.
              </small>
            </div>
          </div>
          <div className="textile_waste_management_img_container">
            <div className="textile_waste_management_img_div">
              <Image
                className="textile_waste_management_img"
                src={textileWasteImg}
                alt=""
              />
              <div className="depDetail_text">
                <h5 className="mt-5">Lorem ipsum dolor sit.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  dolor ex aliquam commodi repellendus voluptatum, eius
                  repudiandae cum?
                </p>
                <button type="">Read More</button>
              </div>
            </div>
            <div className="textile_waste_management_img_div">
              <Image
                className="textile_waste_management_img"
                src={textileWasteImg2}
                alt=""
              />
              <div className="depDetail_text">
                <h5 className="mt-5">Lorem ipsum dolor sit amet.</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  architecto hic dolor incidunt at. Quia, eius. Exercitationem
                  corporis eligendi vero.
                </p>
                <button type="">Read More</button>
              </div>
            </div>
            <div className="textile_waste_management_img_div">
              <Image
                className="textile_waste_management_img"
                src={textileWasteImg3}
                alt=""
              />
              <div className="depDetail_text">
                <h5 className="mt-5">Lorem, ipsum dolor.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  quibusdam distinctio, voluptatum alias cum quisquam!
                </p>
                <button type="">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferingWasteMangement;
