import React from 'react';

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <FaFacebook className='icon'/>
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        <FaPinterest className='icon'/>
      </div>

      <div className='container'>
        <div className='col'>
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About us</p>
        </div>

        <div className='col'>
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About us</p>
        </div>

        <div className='col'>
          <h3>Idea</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About us</p>
        </div>

        <div className='col'>
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer