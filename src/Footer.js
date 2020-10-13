import React from 'react'
import Fade from 'react-reveal/Fade';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <Fade delay={500}>
                <div>COVID-19 TRACKER</div>
                <div className="footer_copyright">
                    2020&copy; All Rights Reserved.
            </div>
            </Fade>
        </footer>
    )
}

export default Footer
