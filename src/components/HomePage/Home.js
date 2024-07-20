import React from 'react';
import dpImage from '../images/DP14.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className='hero'>
      <div className="content">
        <h1 className='anim'>Shah <span>Fahad </span></h1>
        <p className='anim'>Innovative thinker and passionate creator, dedicated to transforming ideas into impactful digital experiences.</p>
        <p className='anim'> 👋 Hi, I'm Shah Fahad, a passionate individual diving into the realms of technology and creativity. With a keen eye for innovation and a heart set on learning, I'm on a journey to explore the endless possibilities that the digital world offers.</p>
        <a href="/Contact" className='home-btn anim'>Contact Now!</a>
      </div>
      
      <img src={dpImage} className='home-dp anim' />
    </div>
    
  )
}

export default Home;
