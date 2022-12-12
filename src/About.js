import React from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';

function About() {
    return (
        <Fade>
            <div className="highlight_wrapper">
                <div className="center_wrapper">
                    <h2>About COVID-19</h2>
                    <div className="highlight_description">
                        <p>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:</p>
                        &nbsp;
                        <p>
                            <li>
                                Fever or chills
                            </li>
                            <li>
                                Cough
                            </li>
                            <li>
                                Shortness of breath or difficulty breathing
                            </li>
                            <li>
                                Muscle or body aches
                            </li>
                            <li>
                                Fatigue
                            </li>
                            <li>
                                Headache
                            </li>
                            <li>
                                New loss of taste or smell
                            </li>
                            <li>
                                Sore throat
                            </li>
                            <li>
                                Congestion or runny nose
                            </li>
                            <li>
                                Nausea or vomiting
                            </li>
                            <li>
                                Diarrhea
                            </li>
                        </p>

                        &nbsp;

                        <p>
                            This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.
                            The world is facing an unprecedented medical crisis. Throughout this challenging time, your health and safety remain our top priority. Protect yourself and your loved ones with the help of this important information on COVID-19. Together, we can keep our communities healthy and strong.
                        </p>
                    </div>
                    <div className="about_youtubeVideo">
                        <iframe title="What is COVID-19" width="560" height="315" src="https://www.youtube.com/embed/uij5lfXbY6g" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>


        </Fade >
    )
}

export default About
