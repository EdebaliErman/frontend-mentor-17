import React from 'react'
import { images } from '../../Data/data'
import "./Footer.css"


function Footer() {
  return (
    <div className='Footer'>
      <div className='asking-card'>
        <h1>Ready To Build Your Community?</h1>
        <button>Get Started For Free</button>
      </div>
      <div className='contact'>
        <img className='md:w-60 md:px-4 px-32 mb-12 ' src={images.logoWhite} alt='logo' />
        <div className='contact-bar'>
          {/*------- Contact --------  */}
          <div className='md:mb-12'>
            <ul>
              <li >
                <img src={images.location} alt='icon'/>
                <p className='w-60'>
                  Lorem ipsum dolor sit amet, consectetur adipisang cult, sed do eiusmod tempor inadidunt ut labore et dolore magna auiqua
                </p>
              </li>
              <li>
                <img src={images.phone} alt='icon'/>
                <p>+1-543-123-4567</p>
              </li>
              <li>
                <img src={images.email} alt='icon'/>
                <p>example@huddle.com</p>
              </li>
            </ul>
          </div>
          {/*------- Page About --------  */}
          <div >
            <ul>
              <li>About Us</li>
              <li>What We Do </li>
              <li>FAQ</li>
            </ul>
          </div>
          {/*------- Page İnfo --------  */}
          <div className='mb-12'>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/*------- Social Media --------  */}
          <div className='footer-social' >
            <div className='social'>
              <span className='group '>
                {images.facebook}
              </span>
              <span className='group'>
                {images.instagram}
              </span>
              <span className='group'>
                {images.twitter}
              </span>
            </div>
            <p className='md:text-sm '>© Copyright 2018 Huddle. All rights reserved. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
