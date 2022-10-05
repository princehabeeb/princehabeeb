import React, { useState } from 'react'
import project1 from '../images/project1.jpg'
import '../styles/projects.css'

function Projects() {
  
  return (
    <section id='projects-section'>
      <div className='container-fluid '>
      <div  className='row'>
       <ProjectsCol  />
       <ProjectsCol  />
       <ProjectsCol  />
       <ProjectsCol  />
       <ProjectsCol   />
       <ProjectsCol   />
    </div>
    </div>
    </section>
  )
}

function ProjectsCol() {
  const [toggle, setToggle] = useState(true);
  return (
       
       <div id='project' className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
         <img src={project1} alt="" />
         <div id='project-icon'>
          <p>E-Commerce website</p> <div onClick={() => setToggle(!toggle)}>+</div>
         </div>
         <div id={toggle ? 'project-links-show' : 'project-links'}>
          <a href="/">Souce Code</a>
          <a href="/" className='p-active'>Preview</a>
         </div>
       </div>
  )
}

export default Projects