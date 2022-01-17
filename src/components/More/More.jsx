import React from 'react'
import './More.scss'

const More = ({languages, habilities,volunteer}) => {
    return (
        <div className='more'>
            
            <div className='title'><h2>Languages</h2></div>
            <div className='card'>
                <div>
                    <p>{languages.language}</p>
                    <p>🎤 wrlevel: {languages.wrlevel}</p>
                    <p>✍  splevel: {languages.splevel}</p>
                </div>
            </div>
            
            <div className='title'><h2>Skills</h2></div>

            <div className='card'>
                <div>
                    {habilities.map((item)=>{
                        return (
                            <div key={JSON.stringify(item)}>
                                <p>{item}</p>
                            </div>
                    )})}
                </div>
            </div>
            
            <div className='title'><h2>Volunteer</h2></div>
            
            <div className='card'>
                <div>
                    {volunteer.map((item)=>{
                        return (
                            <div key={JSON.stringify(item)}>
                                <p>{item.name}</p>
                                <p>{item.where}</p>
                                <p>{item.description}</p>
                            </div>
                        )})}
                </div>
            </div>

        </div>
    )
}

export default More
