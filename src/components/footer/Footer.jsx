import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MyPortfolio</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Servies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com//profile.php?id=100010850645161" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com/abdullah_ahmad_113" target='_blank'><FiInstagram/></a>
        <a href="https://github.com//AM131814151518" target='_blank'><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; my-portfolio-web. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
