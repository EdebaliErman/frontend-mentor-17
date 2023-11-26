import React from 'react'
import { headerText, images } from '../../Data/data'
import "./Header.css"
function Header() {

    return (
        <div className='Header'>
              <header>
                <img className='md:w-20 relative  ' src={images.logo} alt='logo' />
                <button>Try It Free</button>
            </header>
            <footer>
                <div>
                    <h1>{headerText.title}</h1>
                    <h4>{headerText.comment}</h4>
                    <button>Get started for free</button>
                </div>
                <div>
                    <img className='m-12 md:m-0 md:p-5' src={images.mockups} alt='mockups'/>
                </div>
            </footer>
        </div>
    )
}

export default Header
