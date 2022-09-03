import { faBootstrap, faHtml5, faCss3, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["A", 'b', 'o', "u", "t", " ", "M", "e"]}
                        idx={15}
                    />
                </h1>
                <p>
                I am a frontend developer based in New York City transitioning from the healthcare field to the world of code! Frontend development is a way for me to showcase not only my logical side, but express my creative side as well. It's a best of both worlds!  
                </p>
                <p>
                Collaboration, empathy and open-mindedness are some of many virtues I value. I consider myself ambitious, a persistant learner, and determined in finding a way to improve my skillset.
                </p>
                <p>
                I am seeking web developer opportunities to contribute on challenging and diverse projects!
                </p>
            </div> 

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faBootstrap} color="#8A2BE2"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/> 
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About