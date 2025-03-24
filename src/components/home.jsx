import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const skills = [
  "Frontend Web Developer",
  "Backend Developer",
  "UI/UX Enthusiast",
  "Marketing Specialist",  
  
];

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);  
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    const skillChangeInterval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % skills.length;
        setCurrentSkill(skills[nextIndex]);  
        return nextIndex;
      });
    }, 3000); 

    
    return () => clearInterval(skillChangeInterval);
  }, []); 

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-intro">
          {/* Profile Picture */}
          <div className="home-profile-pic">
            <img
              src="/Images/image8.jpg" 
              alt="Profile Picture"
              className="profile-img"
            />
          </div>
          <div className="home-text">
            <h1 className="home-title">
              <strong>Hi, I'm Terry Waswa</strong>
            </h1>
            {/* Rotating Skills */}
            <p className="home-skills">
              <strong>{currentSkill}</strong>
            </p>
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
