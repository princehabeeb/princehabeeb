import React from 'react'
import HeroImg from '../images/myimg.png'
import '../styles/Home.css'

function Home() {
  return (
      <section id='home-container'>
        <div id='home-text'>
         <h3>Hello!</h3>
         <h1>I'M John Doe</h1>
         <h3>Senior Fronted Developer</h3>
         <button className='btn-fill'> <a href="/">Hire Me</a></button>
         <button className='btn-unfill'> <a href="/">My works</a></button>
        </div>
        <div id='home-img'>
           <img src={HeroImg} alt="habibullahi img" />
        </div>
      </section>
  )
}

export default Home