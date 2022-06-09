import React from 'react';
import './Intro.css'
import person from '../../img/mypic.png'
const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My Name is</h2>
                    <h1 className='i-name'>Tahsim Reduwan</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Web Developer
                            </div><div className="i-title-item">
                               UI/UX Designer
                            </div><div className="i-title-item">
                                Photographer
                            </div><div className="i-title-item">
                               Writer
                            </div>
                            <div className="i-title-item">
                               Content-creator
                            </div>
                        </div>
                        
                    </div>
                    <p className="i-desc">
                    Hi, I' m a dedicated and passionate MERN Stack Developer . I'm a quick learner and eager to learn new technologies to expand my knowledge. I want to work with a renowned team or company to build up my career as a Web Developer. I want to see myself as a Senior Web Developer in next 5 years
                        </p>
                        <a className='resume' href="https://drive.google.com/file/d/1OBVTKKzmpZpYKqdyaZIew7shuh-EoJNf/view?usp=sharing">Download Resume</a>
                </div>
            </div>
             <div className='i-right'>
                 <div className="i-bg">

                 </div>
                 <img src={person} alt="" className='i-img' />
             </div>
        </div>
    );
};

export default Intro;