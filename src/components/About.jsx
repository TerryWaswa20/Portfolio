import React from 'react';
import './About.css'; // Make sure to create and style this CSS file

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate web and mobile designer and developer with a strong background in digital marketing. I specialize in creating beautiful, user-friendly websites and mobile applications, while also leveraging marketing strategies to ensure your brand reaches the right audience. With a creative mindset and a data-driven approach, I aim to deliver outstanding digital experiences.
        </p>
        
        <div className="skills">
          <div className="skill">
            <h3>Web Design & Development</h3>
            <p>
              I create visually stunning and functional websites using modern web technologies like HTML, CSS, JavaScript, and React. I’m also experienced with back-end development using Node.js and databases such as MongoDB and MySQL.
            </p>
            <ul>
              <li>Responsive Web Design</li>
              <li>HTML5, CSS3, JavaScript, React</li>
              <li>UI/UX Design</li>
              <li>Website Performance Optimization</li>
            </ul>
          </div>

          <div className="skill">
            <h3>Mobile Design & Development</h3>
            <p>
              I design and develop mobile applications that are intuitive, engaging, and easy to use. Whether it's a native app for iOS and Android or a cross-platform solution using React Native, I ensure that your app delivers a seamless experience across all devices.
            </p>
            <ul>
              <li>React Native & Expo</li>
              <li>Cross-Platform Development</li>
              <li>Mobile UI/UX Design</li>
              <li>App Store Optimization (ASO)</li>
            </ul>
          </div>

          <div className="skill">
            <h3>Marketing Skills</h3>
            <p>
              In addition to my design and development expertise, I have a strong foundation in digital marketing. From SEO and SEM to social media and email campaigns, I help brands grow and connect with their audiences effectively.
            </p>
            <ul>
              <li>SEO & SEM</li>
              <li>Content Marketing</li>
              <li>Social Media Strategy</li>
              <li>Brand Growth & Engagement</li>
            </ul>
          </div>
        </div>

        <div className="cta">
          <p>
            Ready to start your next project? Let's collaborate and bring your ideas to life!
          </p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
