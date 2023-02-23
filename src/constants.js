import React from 'react';

import Datafy from './Assets/datafy.png';
import CloudJams from './Assets/cloudjams.png';
import IM from './Assets/im.png';
import Yahtzee from './Assets/yahtzee.png';
import StatsDB from './Assets/statsdb.png';
import GitHub from './Assets/github.png';
import Photography from './Assets/photography.png';

import MiniDatafy from './Assets/mini-datafy.png';
import MiniCloudJams from './Assets/mini-cloudjams.png';
import MiniIM from './Assets/mini-im.png';
import MiniYahtzee from './Assets/mini-yahtzee.png';
import MiniStatsDB from './Assets/mini-statsdb.png';
import MiniGitHub from './Assets/mini-github.png';
import MiniPhotography from './Assets/mini-photography.png';

export const DARK_PINK = '#FF7C7C';

export const LIGHT_PINK = '#FFB6B9';

export const PURPLE = '#9c88f7';

export const BLUE = '#8DEAFF';

export const YELLOW = '#FFE084';

export const ALMOST_WHITE = '#F5F5F5';

export const projectInfo = [
  {
    color: DARK_PINK,
    image: Datafy,
    mini: MiniDatafy,
    name: 'data-fy',
    type: 'full stack web app',
    stack: 'Java, React',
    description: (
      <span>
        Data-fy is a Spotify Wrapped remake created as a full stack web application
        <br />
        <br />
        Through the Spotify API, the users personal listening data is acquired. Then processed by the server
          and presented to the front end. Interesting data relations and
          vibrate charts provide an engaging experience.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://github.com/valentinojosh/data-fy',
      },
      {
        name: 'code',
        link: 'https://github.com/valentinojosh/data-fy',
      },
    ],
  },
  {
    color: LIGHT_PINK,
    image: CloudJams,
    mini: MiniCloudJams,
    name: 'cloud-jams',
    type: 'Lambda function',
    stack: 'Java, React, AWS',
    description: (
      <span>
        blog.karenying.com is my blog site. It was bootstrapped with{' '}
        <a
          href='https://github.com/alxshelepenok/gatsby-starter-lumen'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: LIGHT_PINK }}
        >
          Lumen
        </a>
        , a lightweight Gatsby starter and is statically hosted on{' '}
        <a
          href='http://netlify.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: LIGHT_PINK }}
        >
          Netlify
        </a>
        .
        <br />
        <br />I write mostly web dev tutorials and UI/UX observational pieces.
        Blogging has been a fun outlet to explore those areas, while also
        helping me better articulate my thoughts/writing.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://blog.karenying.com/',
      },
      {
        name: 'code',
        link: 'https://github.com/karenying/blog.karenying.com',
      },
    ],
  },
  {
    color: DARK_PINK,
    image: IM,
    mini: MiniIM,
    name: 'ims',
    type: 'full stack web app',
    stack: 'React, Node.js, SQL, REST',
    description: (
      <span>
        Expresso is an online-ordering app for Princeton University’s{' '}
        <a
          href='https://pucoffeeclub.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: YELLOW }}
        >
          Coffee Club
        </a>
        . Much like any online-ordering interface, the baristas are able to see
        the orders the students place. The students either pay in store when
        picking up, or use Princeton’s Student Charge.
        <br />
        <br />
        We worked closely with both the Coffee Club and the University on this
        app.
        <br />
        <br />
        Launch postponed.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'http://coffeeclub.princeton.edu/',
      },
    ],
  },
  {
    color: LIGHT_PINK,
    image: Yahtzee,
    mini: MiniYahtzee,
    name: 'yahtzee',
    type: 'static site',
    stack: 'HTML, CSS, JS, JQuery',
    description: (
      <span>
        In the spirit of Vlogmas, I participated in Blogmas — miniposts every
        day of December 2020 until Christmas, writing about something I coded /
        designed / learned that day.
        <br />
        <br />I created a semi-interactive calendar visualizer to encapsulate
        the experience.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://www.blogmas.karenying.com/',
      },
      {
        name: 'code',
        link: 'https://blog.karenying.com/posts/blogmas-2020',
      },
    ],
  },
  {
    color: DARK_PINK,
    image: StatsDB,
    mini: MiniStatsDB,
    name: 'stats db',
    type: 'database',
    stack: 'SQL, MySQL',
    description: (
      <span>
        Dayz is a bullet journal-style mood tracker. It utilizes a RESTful api
        with a MERN stack. This was my first solo full stack project where I
        implemented and deployed all the components from scratch. It's hosted on
        Heroku.
        <br />
        <br />I wrote a{' '}
        <a
          href='https://blog.karenying.com/posts/tracking-my-mood-daily-2020'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: DARK_PINK }}
        >
          blog post
        </a>{' '}
        about how I used Dayz to track my mood every day of 2020.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://blog.karenying.com/posts/tracking-my-mood-daily-2020',
      },
        {
            name: 'paper',
            link: 'https://blog.karenying.com/posts/tracking-my-mood-daily-2020',
        },
    ],
  },
  {
    color: LIGHT_PINK,
    image: GitHub,
    mini: MiniGitHub,
    name: "github",
    type: 'repositories',
    stack: 'Java, React, SQL, AWS',
    description: (
      <span>
        Driver’s Ed is an infinite runner game. A student driver must navigate
        Princeton University's Washington Road to collect coins while avoiding
        obstacles.
        <br />
        <br />
        Won Art Direction Award and 3rd place overall for Spring 2020 COS 426:
        Computer Graphics.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://github.com/karenying/drivers-ed/',
      },
    ],
  },
  {
    color: DARK_PINK,
    image: Photography,
    mini: MiniPhotography,
    name: 'photography',
    type: 'creative',
    stack: 'DSLR, Photoshop, Illustrator',
    description: (
      <span>
        Color Charts aims to increase the readability of charts, graphs, and
        diagrams on the web.
        <br />
        <br />
        It improves upon existing extensions by using researched color blind
        friendly palettes to recolor images. The algorithm uses HTML Canvas and
        Base64 encoding to recolor images in place.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://github.com/karenying/color-charts',
      },
    ],
  },
];