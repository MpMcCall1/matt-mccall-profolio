import react from 'react';
import './Home.css';
import profilePic from '../data/profilePic.jpg';


function About(){
    return(
        <div className="home-wrapper">
            <div className="main-page">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-4">
                            <img src={profilePic} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <h1 >Hello there </h1>
                            <b></b>
                            <p >My name is Matt McCall. </p>
                            <p >I am a versatile and highly driven software developer.</p>
                            <p >My passions revolve around new web and cloud technologies, board games, and traveling to see family and friends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;