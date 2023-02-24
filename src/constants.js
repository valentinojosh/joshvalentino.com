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
    stack: 'Java, React, REST',
    description: (
      <span>
          *Currently in development*
        <br />
        <br />
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
    stack: 'Java, AWS',
    description: (
      <span>
        Cloud-Jams is an AWS Lambda function triggered weekly by CloudWatch Events to update a text file containing the global top 5 songs on spotify for the week.
          <br />
        <br />
          This function utilizes Java, JGit, and the Spotify API.
      </span>
    ),
    buttons: [
      {
        name: 'chart',
        link: 'https://github.com/valentinojosh/cloud-jams/blob/main/WeeklyCharts/Charts.txt',
      },
      {
        name: 'code',
        link: 'https://github.com/valentinojosh/cloud-jams/',
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
          IMS is an incident management system for a local business, FVSRA, in Aurora, IL.
            Our team utilized React, Node.js, SQL, and REST architecture in an agile environment.
          <br/>
          <br/>
          I led the formal documentation, frontend design, and customer communication; I also translated verbal and written needs into technical requirements, stories, and other deliverables. In addition, I assisted in the development of the backend and the design of the database.
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
        Yahtzee is the first web project I ever worked on. The frontend is of questionable design; However, the backend logic is well designed in an effort to be efficient, simple, and score properly.
        <br />
        <br />
          It's designed to be fun, interactive, and easy to play. I grew up playing a variety of dice and card games with my mom, including Yahtzee. Hence, even to this day I still enjoy playing this.
          My high score is 275. If you can beat my score feel free to{' '}
          <a
              href='https://www.linkedin.com/in/valentino-josh/'
              style={{ color: YELLOW }}
              target='_blank'
              rel='noopener noreferrer'
          >
              reach out
            </a>
          !
      </span>
    ),
    buttons: [
      {
        name: 'game',
        link: 'https://valentinojosh.github.io/Yahtzee_Valentino.html',
      },
      {
        name: 'code',
        link: 'https://github.com/valentinojosh/yahtzee',
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
        Database created in SQL utilizing MySQL Workbench. Included design of the ERD, creation of tables and their relationships in SQL, insertion of data, samples of complex queries, and connection via web application.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://valentinojosh.github.io/database.html',
      },
        {
            name: 'paper',
            link: 'https://valentinojosh.github.io/assets/pdfOverview.pdf',
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
        For more information on the majority of my projects check out my GitHub!
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://github.com/valentinojosh',
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
        During University I had the pleasure of taking a photography course. I have always loved photography, so it was a great opportunity to expand my skills with DSLR cameras, Photoshop, and Illustrator.
        <br />
        <br />
        Learning to use Photoshop has been particular useful especially so in web design. For example, any minified pictures on my portfolio site were made through Photoshop.
        <br />
        <br />
          If you're interested feel free to check out the Elysian Magazine where two of my photographs were published, one of which is the very first one of the gallery!
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://www.auelysianmagazine.com/gallery',
      },
    ],
  },
];
