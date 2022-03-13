import React from 'react';
import '../styles/Projects.scss';

function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h2>Projects</h2>
      <div className="container">
        <div>
          <div className="image-4"></div>
          <h4>Multistep Form</h4>
          <a href="https://multistep-form8276d2.netlify.app/" target="_blank"><button className="button-live">Live</button></a>
          <a href="https://github.com/TempUsername2436/multistep-form" target="_blank"><button className="button-code">Code</button></a>
        </div>
        <div>
          <div className="image-1"></div>
          <h4>Forms Example</h4>
          <a href="https://forms-example81c88.netlify.app" target="_blank"><button className="button-live">Live</button></a>
          <a href="https://github.com/TempUsername2436/forms-exmaple" target="_blank"><button className="button-code">Code</button></a>
        </div>
        <div>
          <div className="image-2"></div>
          <h4>Landing Page</h4>
          <a href="https://landing-page992213.netlify.app" target="_blank"><button className="button-live">Live</button></a>
          <a href="https://github.com/TempUsername2436/landing-page" target="_blank"><button className="button-code">Code</button></a>
        </div>
        <div>
          <div className="image-3"></div>
          <h4>Drawing Project</h4>
          <a href="https://drawing-project24665.netlify.app" target="_blank"><button className="button-live">Live</button></a>
          <a href="https://github.com/TempUsername2436/drawing-project" target="_blank"><button className="button-code">Code</button></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
