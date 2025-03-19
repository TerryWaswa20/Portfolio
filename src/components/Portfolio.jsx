import React from "react";
import Project from "./project"; // Import the Project component
import './Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  const projects = [
    {
      title: "Farmer E-commerce",
      description: "This is a simple responsive website for farmers to showcase their farm produce.",
      image: "/Images/farm1.jpg", 
      link: "https://github.com/TerryWaswa20/FarmConnect",
    },
    {
      title: "Information System",
      description: "Its a website that helps tourists in Kenya discover the best adventure companies of their desire.",
      image: "/Images/tour2.jpg", 
      link: "https://terrywaswa20.github.io/TourUs/",
    },
    {
        title: "Product Marketing Posters",
        description: "Click on the link below to view my marketing work.",
        image: "/Images/market1.png",
        link: "https://www.canva.com/projects",
      },
    // More projects can be added here
  ];

  return (
    <div className="portfolio">
      <h1>Check My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
