import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import custom CSS for styling (optional)

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-intro">
          {/* Profile Picture */}
          <div className="home-profile-pic">
            <img 
              src="/Images/image8.jpg"  // Make sure to replace with the correct path
              alt="Profile Picture"
              className="profile-img"
            />
          </div>
          <div className="home-text">
            <h1 className="home-title">Hi, I'm Terry Waswa</h1>
            <p className="home-description">
              I'm a passionate web developer with a focus on creating beautiful and
              functional websites. Explore my projects and let's connect!
            </p>
            <div className="home-buttons">
              <Link to="/Portfolio" className="home-button">
                View My Projects
              </Link>
              <Link to="/contact" className="home-button">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Home;
