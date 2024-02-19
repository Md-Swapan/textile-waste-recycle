import React from "react";
import "./PrincipleTextile.css";
import rImg from "../../../../assets/Textile-waste-treatment-strategies-3R-concept.jpg";
import Image from "next/image";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const PrincipleInTextile = () => {
  return (
    <>
      <div className="principle_of_textile_section">
        <div className="principle_of_textile_title">
          <h1>
            "3R" Principle in <br /> textile product and process
          </h1>
        </div>
        <div className="principle_of_textile_content_container">
          <div className="principle_of_textile_img_container">
            <Image className="principle_of_textile_img" src={rImg} />
          </div>
          <div className="principle_of_textile_content">
            <div className="principle_of_textile_content_div">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div>
                <h4>Reduce -</h4>
                <small>
                  Raw materials, Energy and Chemicals etc. using in process and
                  textile product development.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis saepe neque corrupti ipsum asperiores, eaque
                  distinctio reprehenderit,
                </small>
              </div>
              <br />
              <button>
                  view Details <HiOutlineArrowSmallRight />
                </button>
            </div>
            <div className="principle_of_textile_content_div">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div>
                <h4>Reuse - </h4>
                <small>
                  Reuse, Repair and Renew of textile products:
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, obcaecati dolore. In magni ea deleniti ducimus
                  repellendus alias, earum aut!
                </small>
              </div>
              <br />
                <button>
                  view Details <HiOutlineArrowSmallRight />
                </button>
            </div>

            <div className="principle_of_textile_content_div">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div>
                <h4>Recycle -</h4>
                <ul>
                  <li>
                    <strong>Sorting process:</strong> Robitic, FTIR.RFID,
                    Barcode etc.
                  </li>
                  <li>
                    <strong>Recycling process:</strong> pre-consumer and
                    consumer waste through mechanical, physical, chemical
                    properties convert the material into monomer or chemical etc
                  </li>
                </ul>

                <button>
                  view Details <HiOutlineArrowSmallRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipleInTextile;
