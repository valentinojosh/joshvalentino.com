import React from 'react';
import Fade from '@material-ui/core/Fade';

import '../Styles/Contact.css';
import {PURPLE} from '../constants';

const About = () => {
  return (
      <div className={`contact-container`}>
        <Fade in timeout={{ enter: 1200 }}>
          <div className='contact-content'>
            <p>
              Hi{" "}
              <span className="wave" role="img" aria-label="wave">
                  👋🏼
                </span>{" "}
              I'm Josh Valentino. I'm an experienced swe with a proven track record of solving complex problems,
              driving optimizations, and demonstrating exceptional communication skills. Seeking to innovate,
              collaborate, and continue in lifelong learning.

              <br/>
              <br/>
              For more information on my experience, education, and skills feel free to send me an {" "}
              <a
                  href='mailto:valentinojosh48@gmail.com'
                  target='_blank'
                  style={{color: PURPLE}}
                  rel='noopener noreferrer'
                  title='valentinojosh48@gmail.com'
              >
                email
              </a>
              !
            </p>
          </div>
        </Fade>
      </div>
  );
};



export default About;
