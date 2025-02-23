import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import '../Styles/Header.css';
import {
  ALMOST_WHITE,
  PURPLE,
} from '../constants';

const HeaderLink = ({ title, color, edge, selected }) => {
  const padding = edge ? '0rem' : '0.5rem';
  const link = title === 'joshvalentino.com' ? '' : title;

  return (
    <div className='header-link'>
      <Link
        to={`/${link}`}
        style={{ textDecoration: 'none' }}
        className={selected && 'header-no-link'}
        color={PURPLE}
      >

        {title === 'joshvalentino.com' && (
            <h3 className='site-title' style={{paddingRight: padding }}>{title}</h3>
        )}

        {title !== 'joshvalentino.com' && (
            <h3 className={selected ? 'current' : 'sel'} style={{paddingRight: padding }}>{title}</h3>
        )}

        {title !== 'joshvalentino.com' && (

          <div className={selected ? 'header-dot-active' : 'header-dot'}>
            <h3 style={{ color:PURPLE }}>•</h3>
          </div>
        )}
      </Link>
    </div>
  );
};

const Header = () => {
  const page = useParams().page || 'about';

  const useStyles = makeStyles((theme) => ({
    headerContent: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        right: 0,
        paddingRight: '5rem',
      },
    },
    headerContainer: {
      [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    },
  }));

  const classes = useStyles();
  const { headerContent, headerContainer } = classes;

  return (
    <div className={`header-container ${headerContainer}`}>
      <Hidden xsDown>
        <div className='header-logo'>
          <HeaderLink
            title='joshvalentino.com'
            color={ALMOST_WHITE+'!important'}
            selected={page === 'about'}
          />
        </div>
      </Hidden>
      <div className={`header-content ${headerContent}`}>
        <HeaderLink
          title='about'
          selected={page === 'about'}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='projects'
          selected={page === 'projects'}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='contact'
          selected={page === 'contact'}
        />
        {/*<h3 id='slash'>/</h3>*/}
        {/*<div className='header-link'>*/}
        {/*  <a*/}
        {/*    href={res}*/}
        {/*    target='_blank'*/}
        {/*    rel="noreferrer"*/}
        {/*    style={{ textDecoration: 'none' }}*/}
        {/*  >*/}
        {/*    <h3 className='resume'>resume</h3>*/}
        {/*    <div className='header-dot'>*/}
        {/*      <h3 style={{ color: PURPLE }}>•</h3>*/}
        {/*    </div>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Header;
