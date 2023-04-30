import "./hero.css";
import illustration from "../images/illustration-devices.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-background"></div>
        <img src={illustration} alt="" className="hero-illustration" />
      </div>
    </div>
  );
};
export default Hero;
