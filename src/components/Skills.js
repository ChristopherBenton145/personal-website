import React from 'react';
import '../styles/Skills.scss';

function Skills() {
  return (
    <>
      <h2 className='skills'>Skills</h2>
      <section className="section-skills" id="skills">
          <div>
            <h3>Technical Skills</h3>
            <ul>
              <li>HTML / HTML5</li>
              <li>CSS / CSS3</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>JSON</li>
              <li>MongoDB</li>
              <li>Github</li>
              <li>Git</li>
            </ul>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Creativity</li>
              <li>Adaptability</li>
            </ul>
          </div>
      </section>
    </>
  );
}

export default Skills;
