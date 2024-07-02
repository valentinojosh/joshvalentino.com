import React from 'react';
import Fade from '@material-ui/core/Fade';

import '../Styles/Contact.css';
import {PURPLE} from '../constants';

const Contact = () => {
  return (
    <div className={`contact-container`}>
      <Fade in timeout={{ enter: 1200 }}>
        <div className='contact-content'>
          <h2>
            More about me
          </h2>
          <p>
            I enjoy astronomy, philosophy, kinesiology, working out, and everything tech! If you feel like connecting on LinkedIn or simply saying hello feel free:
            <br />
            <br />
            The best way to get in touch is through{' '}
            <a
              href='https://www.linkedin.com/in/valentino-josh/'
              style={{ color: PURPLE }}
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
