import React, { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
  return (
    <section id='contact-container'>
      <h1 >SEND ME A MESSAGE</h1>
      <section id='contact-section'>
      <div id='inputs'>
        <input type="text" 
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input type="text" 
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input type="text" 
        placeholder='Your Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        />
        <br />
        <button className='btn-fill-b'>SEND</button>
      </div>
      <div id='text-area'>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
        <button className='btn-fill-a'>SEND</button>
      </div>
      </section>
    </section>
  )
}

export default Contact