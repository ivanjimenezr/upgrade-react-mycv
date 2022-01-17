import React from 'react'
import './Experience.scss'

const Experience = ({ experience }) => {
    return (
        <div className='experience'>
            <div className='title'><h2>Experience</h2></div>
            <div className='card'>
                {experience.map((item)=>{
                    return (
                        <div key={JSON.stringify(item)}>
                            <h3 className='name'>📕 {item.name}</h3>
                            <p>{item.where}</p>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default Experience
