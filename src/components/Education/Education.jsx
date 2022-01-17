import React from 'react';
import './Education.scss';

const Education = ({ education }) => {
    return (
        <div className='education'>
            <div className='title'><h2>Education</h2></div>
            <div className='card'>
                {education.map((item)=>{
                    return (
                        <div key={JSON.stringify(item)}>
                            <h3 className='name'>📕 {item.name}</h3>
                            <p>{item.where}</p>
                            <p>{item.date}</p>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default Education
