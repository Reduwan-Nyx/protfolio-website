import React from 'react';
import './About.css'
import award from '../../img/award.png'
const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div> 
                <div className="a-card">
                 <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='a-img' />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className="a-sub">
                        Hi, I' m a dedicated and passionate MERN Stack Developer
                </p>
                <p className="a-desc">
                A proven Mern Stack Developer who is passionate about website design as well as user experience. I’am a
                quick learner and eager to learn new Technologies to expand my knowledge. i have made a lot of projects by myself and i showed them in my below projects..i like to build website,i like to do web design and a lot of stuff
        </p>
     
            </div>
        </div>
    );
};

export default About;