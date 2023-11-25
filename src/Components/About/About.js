import React from 'react'
import { aboutData } from '../../Data/data'
import Card from "../Card/Card"
import  "./About.css"
function About() {
  return (
    <div className='About'>
      {aboutData.map((item,key ) => <div key={key}>
        <Card
          title={item.title}
          comment={item.comment}
          img={item.img}
          style={item.style}
        />
      </div>)}
    </div>
  )
}

export default About
