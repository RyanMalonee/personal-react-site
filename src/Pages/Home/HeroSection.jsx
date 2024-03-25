import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-setion-content">
          <p className="section-title">Hey, I'm Ryan</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            B.S. Computer Information Systems
            <br />
            University of South Carolina
          </p>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          smoother={true}
          offset={-70}
          duration={500}
        >
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero-section-img">
        <img src="./img/hero_img.png" />
      </div>
    </section>
  );
}
