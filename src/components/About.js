import React from 'react'
import MyImg from '../images/myimg.png'
import '../styles/About.css'


function About() {
  return (
    <section id='about-section'>
         <div id='about-img'>
          <img src={MyImg} alt="my img" />
         </div>
         <div id='about-text'>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis.</p>
          <h3><span>Name:</span> John Doe</h3>
          <h3><span>Date of Birth:</span> 18, July</h3>
          <h3><span>Address:</span> Katsina, Nigeria</h3>
          <h3><span>Zip Code:</span> 820101</h3>
          <h3><span>Email:</span> mymail0001@gmail.com</h3>
          <h3><span>Phone:</span> 2348149040309</h3>
          <button className='btn-fill'> <a href="/">Download CV</a></button>
         </div>
    </section>
  )
}

export default About