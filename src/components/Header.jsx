import { useState } from "react";
import "./header.css";
import close from "../images/icon-close.svg";
import burger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["PRODUCT", "FEATURES", "PRICING"];

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header-links">
          {links.map((link, index) => (
            <a href="#" key={index} className="header-link">
              {link}
            </a>
          ))}
          <div className="header-dot"></div>
          <a href="#" className="header-link header-login">
            LOGIN
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="btn">
          <img src={isOpen ? close : burger} alt="" className="btn-img" />
        </button>
        <div className={`header-mobile ${isOpen ? "show" : ""}`}>
          {links.map((link, index) => (
            <a href="#" key={index} className="header-link">
              {link}
            </a>
          ))}
          <div className="header-dot"></div>
          <a href="#" className="header-link header-login">
            LOGIN
          </a>
        </div>
      </nav>
    </header>
  );
};

// <header className="header">
//   <nav className="header-nav">
//     <a href="#" className="header-logo">
//       <img src={logo} alt="" />
//     </a>
//     <div className="header-links">
//       <a href="#" className="header-link">
//         PRODUCT
//       </a>
//       <a href="#" className="header-link">
//         FEATURES
//       </a>
//       <a href="#" className="header-link">
//         PRICING
//       </a>
//       <div className="header-dot"></div>
//       <a href="#" className="header-link header-login">
//         LOGIN
//       </a>
//     </div>
//     <button
//       onClick={() => {
//         setIsOpen(!isOpen);
//       }}
//       className="btn"
//     >
//       {!isOpen ? (
//         <img src={burger} alt="" className="btn-img" />
//       ) : (
//         <img src={close} alt="" className="btn-img" />
//       )}
//     </button>
//     <div className={!isOpen ? "header-mobile" : "header-mobile show"}>
//       <a href="#" className="header-link">
//         PRODUCT
//       </a>
//       <a href="#" className="header-link">
//         FEATURES
//       </a>
//       <a href="#" className="header-link">
//         PRICING
//       </a>
//       <div className="header-dot"></div>
//       <a href="#" className="header-link header-login">
//         LOGIN
//       </a>
//     </div>
//   </nav>
// </header>
//   );
// };

export default Header;
