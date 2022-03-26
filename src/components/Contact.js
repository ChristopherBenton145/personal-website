import React from 'react';
import '../styles/Contact.scss'

function Contact() {
  return (
    <section className="section-contact" id="contact">
        <h2>Contact</h2>
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/christopher-benton-78889822a/" target="_blank">https://www.linkedin.com/in/christopher-benton-78889822a/</a>
        <div className="stop"></div>
        <h3>Github</h3>
        <a href="https://github.com/ChristopherBenton145" target="_blank">https://github.com/ChristopherBenton145</a>
        <div className="stop"></div>
        <h3>Stack Overflow</h3>
        <a href="https://stackoverflow.com/users/17382115/temp?tab=profile" target="_blank">https://stackoverflow.com/users/17382115/temp?tab=profile</a>
        <div className="stop"></div>
        <h3>Email</h3>
        <a href="mailto: c.benton.145@gmail.com">c.benton.145@gmail.com</a>
    </section>
  );
}

export default Contact;
