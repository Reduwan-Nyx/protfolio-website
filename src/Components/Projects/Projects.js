import React from 'react';
import Project from '../Project/Project';
import './projects.css'
import {products} from '../../data'
const Projects = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>My Projects</h1>
                <p className='pl-desc'>
                    This is some of my projects that i have completed !!
                </p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Project key={item.id} img={item.img} name={item.name} description={item.description} link={item.link} client={item.client} server={item.server}></Project>
                ))}
                
                
            </div>
           
        </div>
    );
};

export default Projects;