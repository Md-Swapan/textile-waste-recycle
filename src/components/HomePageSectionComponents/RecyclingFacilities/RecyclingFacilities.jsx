import React from "react";
import "./RecyclingFacilities.css";

const RecyclingFacilities = () => {
  return (
    <>
      <div className="recycling_facilities_section">
        <div className="container">
          <div className="recycling_facilities_content">
            <h1 className="">Facilities of Recycling</h1>
            <ol className="recycling_facilities_list">
              <li className="">
                <strong>All textile products:</strong> placed on the EU market
                are:
                <ul className="">
                  <li>durable, repairable and recyclable</li>
                  <li>to a great extent made of recycled fibres</li>
                  <li>free of hazardous substances</li>
                  <li>produced respecting social rights</li>
                </ul>
              </li>
              <li className="">
                "Fast fashion is out of fashion" -consumers benefit longer from{" "}
                <strong>high quality textiles</strong>
              </li>
              <li className="">
                Profitable <strong>re-use and repair services</strong> are
                widely available
              </li>
              <li className="">
                In a{" "}
                <strong>
                  competitive,resilient and innovative textile sector
                </strong>{" "}
                producers take responsibility for their products along the value
                chain
              </li>
              <li className="">
                <strong>
                  Circular rather than throw-away clothes have become the norm,
                </strong>{" "}
                with sufficient capacities for recycling and minimal
                incineration and landfilling
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecyclingFacilities;
