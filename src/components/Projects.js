import React from 'react';
import '../styles/Projects.scss';

function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h2>Projects</h2>
      <div className="container">
        <div>
          <div className="image-2"></div>
          <h4>Space Landing Page</h4>
          <a href="https://space-landing-page42.netlify.app/" target="_blank"><button className="button-live">Live</button></a>
          <a href="https://github.com/TempUsername2436/space-landing-page" target="_blank"><button className="button-code">Code</button></a>
        </div>
        <div>
          <div className="image-1"></div>
          <h4>Multistep Form</h4>
          <a href="https://multistep-form8276d2.netlify.app/" target="_blank"><button className="button-live">Live</button></a>
          <a href="https://github.com/TempUsername2436/multistep-form" target="_blank"><button className="button-code">Code</button></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
