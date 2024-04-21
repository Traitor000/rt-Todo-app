import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="motivational-thoughts">
        <p>"The secret of getting ahead is getting started." - Mark Twain</p>
        <p>"Believe you can and you're halfway there." - Theodore Roosevelt</p>
      </div>
      <div className="developer-info">
        <p>Developed by Ashutosh Gautam</p>
        <ul className="social-links">
          <li><a href="https://github.com/yourusername">GitHub</a></li>
          <li><a href="https://twitter.com/yourusername">Twitter</a></li>
          <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} rtCamp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;