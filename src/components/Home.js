import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function Home() {

  return (
    <div id="particles-js">
      <div className="container">
        <div className="row top">
          <div className="twelve column">
            <div className="logo"></div>
            <h1>Shah Fahad</h1>
            <h2> Web Developer</h2>
          </div>
        </div>

        <div className="row">
          <div className="one-half column">
            <div className="posts pulled">
              <Router>
              <h1>Posts</h1>
              <ul>
                <li><a href="https://www.j-w-v.com/writing/index.php/20-awe-inspiring-codepen-examples-you-can-learn-from" target="_blank" rel="noopener noreferrer">20 Awe-Inspiring Codepen Examples You Can Learn From <span className="new">NEW</span></a></li>
                <li><a href="https://www.j-w-v.com/writing/index.php/hero-images-20-free-places-to-find-them" target="_blank" rel="noopener noreferrer">Hero Images &amp; 20 Free Places To Find Them </a></li>
                <li><a href="https://www.j-w-v.com/writing/index.php/18-mobile-first-css-frameworks" target="_blank" rel="noopener noreferrer">18 Mobile First CSS Frameworks </a></li>
                <li><a href="https://www.j-w-v.com/writing/index.php/how-i-grew-as-a-javascript-developer" target="_blank" rel="noopener noreferrer">How I Grew As A JavaScript Developer </a></li>
                <li><a href="https://www.j-w-v.com/writing/index.php/css-s-undersung-property-box-sizing" target="_blank" rel="noopener noreferrer">CSS's undersung property: box-sizing </a></li>
              </ul>
              </Router>
            </div>
          </div>
        </div>
        
      </div>

      <div className="container ">
        <div className="footer">
          <p>Made using the awesome <a href="https://github.com/VincentGarreau/particles.js/">Particles.js</a>, <a href="http://cpv2api.com/">Codepen V2 API</a> & <a href="http://getskeleton.com/">Skeleton.css</a></p> </div></div>
    </div>
  )
}

export default Home;

