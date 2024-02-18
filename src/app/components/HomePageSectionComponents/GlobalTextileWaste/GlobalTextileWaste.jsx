import Image from "next/image";
import textileWasteImg from "../../../../assets/Clothing-for-Recycling.jpg";
import "./GlobalTextileWaste.css";

const GlobalTextileWaste = () => {
  return (
    <>
      <div className="global_textile_waste_section">
        <div className="global_textile_waste_content_container">
          <div className="textile_waste_img_container">
            <Image className="textile_waste_img" src={textileWasteImg} alt="" />
          </div>
          <div className="global_textile_waste_content">
            <h1 className="global_textile_waste_title">
              Global Fashion Industry Waste
            </h1>
            <ul className="global_textile_waste_content_list">
              <li>
                Up to <strong>100 billion</strong> garments are produced by the
                fashion industry every year.
              </li>
              <li>
                And each year, as much as <strong>92 million tons</strong> of
                clothing ends up in landfills.
              </li>
              <li>
                Only <strong>20%</strong> of textiles are collected for reuse or
                recycling globally.
              </li>
              <li>
                Almost <strong>60%</strong> of all clothing material is actually
                plastic. Nylon, acrylic, and polyester textiles are just a few
                examples of these synthetic fibers that have become so
                ubiquitous in our wardrobes.
              </li>
              <li>
                Textile production generates{" "}
                <strong>42 million tons of plastic waste</strong> per year,
                making the textile industry the second-highest industrial sector
                after packaging.
              </li>
              <li>
                Every time a synthetic garment is washed, it releases tiny
                plastic microfibers into the water. Up to{" "}
                <strong>500,000 tons</strong> of microfibers end up in the ocean
                every year.
              </li>
              <li>
                Textiles and fashion waste account for <strong>9%</strong> of
                annual microplastic pollution added to our oceans.
              </li>
              <li>
                Additionally, the footwear industry and garment industry
                combined are responsible for <strong>8%</strong> of global
                greenhouse gas emissions.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          {/* <div className="text-center mb-4">
            <h2>Global Textile Waste</h2>
          </div> */}
          <div class="global_textile_waste_grid_view_container">
            <div class="grid-item item1">
              <div className="d-flex justify-content-between">
                <small className="">Up to</small>
                <div className="">
                  <p className="">100 BiLLION</p>
                  <small className="">new garments are made each year</small>
                </div>
                <div className="">
                  <img
                    className=""
                    src="https://i.ibb.co/582nLTH/shirt.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="grid-item item2">
              <div className="">
                <dir>
                  <img src="https://i.ibb.co/7R0QKLN/Capture3.png" alt="" />
                </dir>
                <p className="">
                  Of materials used to make clothing
                </p>
                <p className="">END UP IN LANDFILL</p>
                <div>
                  <img src="https://i.ibb.co/SNHNTTd/Capture7.png" alt="" />
                </div>
                <p className="">Thats one truckload</p>
                <p className="">EVERY SECOND</p>
              </div>
            </div>
            <div class="grid-item item3">
              <div className="d-flex justify-content-between">
                <div>
                  <img src="https://i.ibb.co/yB8bsgV/Captur1.png" alt="" />
                </div>
                <div className="">
                  <p className="">The World Produces</p>
                  <p className="">
                    92 Million Tons
                  </p>
                  <p className="">of textile waste every year</p>
                </div>
              </div>
            </div>
            <div class="grid-item item4">
              <div className="">
                <img src="https://i.ibb.co/cCKgj3r/Capture10.png" alt="" />
                <p className="">
                  of all new clothing materials are actually
                </p>
                <p className="">PLASTIC</p>
              </div>
            </div>
            <div class="grid-item item5">
              <div className="">
                <p className="">
                  Textile Production Causes
                </p>
                <p className="">
                  42 MILLION TONS
                </p>
                <p className="">
                  Of plastic waste per year and contributes
                </p>
                <img src="https://i.ibb.co/CPswFmC/Capture11.png" alt="" />
                <p className="">
                  Of annual microplastic pollution added to our oceans
                </p>
              </div>
            </div>
            <div class="grid-item item6">
              <div className="">
                <img src="https://i.ibb.co/tD92JYw/Capture6.png" alt="" />
                <p className="">Of clothes are</p>
                <p className="">RECYCLE INTO</p>
                <p className="">NEW GARMENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalTextileWaste;
