import React from 'react'
import '../styles/SocialLinks.css'
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div id='social-icons'>
      <div>
        <a href="/">
        <FaGithub />
        </a>
      </div>
      <div>
        <a href="/">
        <FaTwitter />
        </a>
      </div>
      <div>
        <a href="/">
        <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks