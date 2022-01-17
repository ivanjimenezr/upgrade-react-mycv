import React from 'react'
import './About.scss'

const About = ({ hero }) => {
    return (
        <div className='about'>
            <div className='title'><h2>About me</h2></div>
            <div className='card'>
                {hero.aboutMe.map((item)=>{
                    return (
                        <div key={JSON.stringify(item)}>
                            <p>{item.info}</p>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    )
}

export default About
