import React from 'react';
import dpImage from '../images/DP14.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='profile-section'>
          <img src={dpImage} className='home-dp anim' alt='Profile' />
          <div className='content-section'>
            <h1 className='anim'>Shah <span>Fahad</span></h1>
            <p className='anim'>Innovative thinker and passionate creator, dedicated to transforming ideas into impactful digital experiences.</p>
            <p className='anim'>👋 Hi, I'm Shah Fahad, a creative technologist with a deep love for building solutions that bridge technology and design. I thrive on challenges and continuously seek to push the boundaries of what's possible in the digital world.</p>
            <p className='anim'>Driven by curiosity and a commitment to excellence, I specialize in crafting elegant and user-centric solutions that not only meet but exceed expectations. From developing cutting-edge applications to designing engaging user experiences, I am dedicated to making a positive impact through technology.</p>
            <p className='anim'>Whether it's through innovative software development, immersive digital experiences, or collaborative problem-solving, I'm always eager to connect with like-minded professionals and explore new opportunities for growth and collaboration. Let’s build something amazing together!</p>
            <a href="/Contact" className='home-btn anim'>Get in Touch!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
