import React from 'react';
import ScrollService from '../../../utilities/ScrollService';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile () {
    return (
        <div className='profile-container'>
            <div className='profile-parent'> 
            <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://web.facebook.com/sila.kiptoo'>
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href='https://myaccount.google.com/profile'>
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href='https://www.instagram.com/proudly_sila/'>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCl0fSanjQayM-zdXI-AJURA'>
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href='https://twitter.com/Sila_Ngetich'>
                                <i className="fa fa-twitter"></i>
                            </a> 
                        </div>
                       
                    </div>
                    
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text"> Sila</span>
                    </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical

                                    steps={
                                        [
                                            "Ardent Web Developer 😊", 1000,
                                            "Full Stack Developer 💻", 1000,
                                            "MERN Stack Developer 👩‍💻",1000,
                                            "React Native Developer 🦾", 1000,
                                            "Front End Developer ✔", 1000,
                                        ]
                                    }
                                    loop={Infinity}

                                />
                            </h1>
                            <span className="profie-role-tagline">
                                Knack of building applications in both front and back-end operations
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                    
                            Hire Me 
                        </button>
                        <a href='sila.pdf' download='Sila sila.pdf'>
                            <button className='btn highlighted-btn'> Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
            </div>
    )
}