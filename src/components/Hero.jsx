import "../styles/Hero.css";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/hero-bg.mp4"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Explorează Galeria Vizual</h1>
        <p className="hero-subtitle">Imagini dinamice din bucket-ul tău MinIO</p>
        <div className="hero-arrow">
          <IoIosArrowRoundDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;