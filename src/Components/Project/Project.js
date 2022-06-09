import React from 'react';
import './Project.css'


const Project = ({img,name,description, link, client, server}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <p className="p-circle"></p>
                <p className="p-circle"></p>
                <p className="p-circle"></p>
                
                
            </div>
            
            <a href="https://monota-car.web.app/" target="_blank">
                <img src={img} alt="" className='p-img' />
            </a>

            <div className='p-all'>
            <h2 className='p-name'>{name}</h2>
            <p className='p-desc'>{description}</p>
            <a className='live-p' href={link}>Live Link</a>
            <a className='live-p' href={client}>Client Link</a>
            <a className='live-p' href={server}>Server Link</a>
            </div>
                
        </div>
        
    );
};

export default Project;