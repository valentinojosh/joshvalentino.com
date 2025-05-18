import React from 'react';
import Fade from '@material-ui/core/Fade';

import '../Styles/Contact.css';
import {PURPLE} from '../constants';

const Contact = () => {
  return (
    <div className={`contact-container`}>
      <Fade in timeout={{ enter: 1200 }}>
        <div className='contact-content'>
          <p>
            Have an interesting opportunity, project, or just want to chat?
            <br/><br/>
            Feel free to shoot me an {' '}
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

export default Contact;
