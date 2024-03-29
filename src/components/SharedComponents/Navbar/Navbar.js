import Link from "next/link";
import "./Navbar.css";
import logo from "../../../assets/png-clipart-recycling-symbol-paper-plastic-recycling-bin-symbol-miscellaneous-blue-removebg-preview.png"
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
          <a className="navbar-brand" href="">
            <Image className="logo" src={logo}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 News & About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Recycling Resource
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Work with Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
