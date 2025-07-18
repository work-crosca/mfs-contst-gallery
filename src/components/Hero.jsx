import { useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import "../styles/Hero.css";

const Hero = () => {
  const scrollToRef = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
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
          <p className="hero-subtitle">
            Imagini dinamice din bucket-ul tău MinIO
          </p>
          <div className="hero-arrow" onClick={scrollToRef}>
            <IoIosArrowRoundDown style={{ cursor: "pointer" }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;