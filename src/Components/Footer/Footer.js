import React from 'react'
import { images } from '../../Data/data'

function Footer() {
  return (
    <div>
      <div>
        <h1>Ready To Build Your Community?</h1>
        <button>Get Started For Free</button>
      </div>
      <div>
        <img className='md:w-20 ' src={images.logo} alt='logo' />
        <div>
          {/*------- Contact --------  */}
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/*------- Page About --------  */}
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/*------- Page İnfo --------  */}
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/*------- Social Media --------  */}
          <div>
            <span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
