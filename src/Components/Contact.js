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
            Feel like connecting or simply saying hello?
          </h2>
          <p>
            Feel free!
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
