import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import image from './images/DP11.jpg';

function About() {
  const [text, setText] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [showText, setShowText] = useState(false);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <section className="about-section">
      <div className="App">
        <header className="App-header" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
          <div className="container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title"></span>
                    <h2 style={{ color: '#007bff' }}>Introduction</h2>
                  </div>
                  <div className="text" style={{ color: '#666' }}>
                    <p>👋 Hi, I'm Shah Fahad, a passionate individual diving into the realms of technology and creativity. With a keen eye for innovation and a heart set on learning, I'm on a journey to explore the endless possibilities that the digital world offers.</p>
                  </div>
                  <div className="btn-box">
                    <Link to="/Contact" className="theme-btn btn-style-primary" style={{ color: 'white', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="author-desc" style={{ color: '#666' }}>
                    <h2 style={{ color: '#007bff' }}>Shah Fahad</h2>
                    <span>Web Developer</span>
                  </div>
                  <figure className="image-1">
                    <Link to="/" className="lightbox-image" data-fancybox="images">
                      <img src={image} title="Shah Fahad" alt="Shah Fahad Profile" style={{ width: '50%', height: '300px', borderRadius: '50%', border: '5px solid #007bff' }} />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
            <div className="sec-title">
              <span className="title" style={{ color: '#007bff' }}>
                Collaboration Goals
              </span>
              <h2 style={{ color: '#007bff' }}>We want to lead in innovation & Technology</h2>
            </div>
            <div className="text" style={{ color: '#666' }}>
              💞️ I'm looking to collaborate on innovative projects that blend technology with creativity, where I can contribute my expertise and learn from like-minded individuals. Let's join forces to create something truly remarkable!
            </div>
            <div className="text" style={{ color: '#666' }}>
              In the end, I would say keep visiting our website and enjoy the quality content.
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default About;