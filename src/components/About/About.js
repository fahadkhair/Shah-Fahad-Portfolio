import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/DP14.jpg';
import './About.css'; // Ensure this CSS file is included

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="text-column">
              <div className="intro-section">
                <h2 className="section-title">Introduction</h2>
                <p>
                  👋 Hi, I'm Shah Fahad, a passionate individual diving into the realms of technology and creativity. With a keen eye for innovation and a heart set on learning, I'm on a journey to explore the endless possibilities that the digital world offers.
                </p>
                <Link to="/Contact" className="btn">
                  Get In Touch!
                </Link>
              </div>

              <div className="collaboration-section">
                <h2 className="section-title">Want to lead in innovation & Technology</h2>
                <p>
                  💞️ I'm looking to collaborate on innovative projects that blend technology with creativity, where I can contribute my expertise and learn from like-minded individuals. Let's join forces to create something truly remarkable!
                </p>
                <p>
                  In the end, I would say keep visiting our website and enjoy the quality content.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <div className="image-column">
              <h2 className="name">Shah Fahad</h2>
              <p className="role">Web Developer</p>
              <img src={image} alt="Shah Fahad Profile" className="profile-image anim" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
