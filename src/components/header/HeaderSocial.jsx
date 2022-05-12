import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://linkedin.com" target="_blank"><BsGithub /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram/></a>
    </div>
  );
}

export default HeaderSocial;
