import React from 'react';
import Fade from '@material-ui/core/Fade';

import '../Styles/Contact.css';
import { BLUE} from '../constants';

const Contact = () => {
  return (
    <div className={`contact-container`}>
      <Fade in timeout={{ enter: 1200 }}>
        <div className='contact-content'>
          <h2>
            have an interesting project you're working on, or just want to say hi?
          </h2>
          <p>
            I'd love to hear from you!
            <br />
            <br />
            The best way to reach me is connect with me on{' '}
            <a
              href='https://www.linkedin.com/in/valentino-josh/'
              style={{ color: BLUE }}
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
