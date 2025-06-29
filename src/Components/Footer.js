import React from 'react';
import { FaLinkedin, FaCode } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import '../Styles/Footer.css';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingBottom: '1rem',
    },
  },
  footerContent: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      paddingRight: '1rem',
    },
  },
}));

const StyledTooltip = withStyles(() => ({
  tooltip: {
    boxShadow: '0.3rem 0.3rem 1rem black',
    fontSize: 11,
    fontWeight: 700,
    fontFamily: 'Varela Round',
  },
}))(Tooltip);

const Footer = () => {
  const classes = useStyles();
  const { footerContainer, footerContent } = classes;

  return (
    <div className={`footer-container ${footerContainer}`}>
      <Hidden xsDown>
        <div className='footer-copyright'>
          <p
            style={{
              marginRight: '1rem',
            }}
          >
            ©
          </p>
          <p
            style={{
              marginRight: '1rem',
            }}
          >
            josh valentino
          </p>
          <h3>•</h3>
          <p style={{ marginLeft: '1rem' }}>all rights reserved</p>
        </div>
      </Hidden>
      <div className={`footer-links-container ${footerContent}`}>
        <div className='footer-link code'>
          <StyledTooltip title='Site source code' placement='top' arrow>
            <a
              href='https://github.com/valentinojosh'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaCode size='1.7rem' />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link github'>
          <StyledTooltip title='GitHub' placement='top' arrow>
            <a
              href='https://github.com/valentinojosh'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GoMarkGithub style={{ animationDelay: '100ms' }} />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link email'>
          <StyledTooltip title='Email' placement='top' arrow>
            <a
              href='mailto:valentinojosh48@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoMdMail style={{ animationDelay: '200ms' }} size='1.7rem' />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link linkedin'>
          <StyledTooltip title='LinkedIn' placement='top' arrow>
            <a
              href='https://www.linkedin.com/in/valentino-josh/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin style={{ animationDelay: '300ms' }} size='1.7rem' />
            </a>
          </StyledTooltip>
        </div>
      </div>
    </div>
  );
};

export default Footer;
