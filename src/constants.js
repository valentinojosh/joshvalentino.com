import React from 'react';

import Datafy from './Assets/datafy.png';
import CloudJams from './Assets/cloudjams.png';
import IM from './Assets/im.png';
// import Yahtzee from './Assets/yahtzee.png';
// import StatsDB from './Assets/statsdb.png';
import GitHub from './Assets/github.png';

import MiniDatafy from './Assets/mini-datafy.png';
import MiniCloudJams from './Assets/mini-cloudjams.png';
import MiniIM from './Assets/mini-im.png';
// import MiniYahtzee from './Assets/mini-yahtzee.png';
// import MiniStatsDB from './Assets/mini-statsdb.png';
import MiniGitHub from './Assets/mini-github.png';


export const PURPLE = '#9c88f7';

export const BLUE = '#8DEAFF';

export const ALMOST_WHITE = '#F5F5F5';

export const projectInfo = [
  {
    color: PURPLE,
    image: Datafy,
    mini: MiniDatafy,
    name: 'data-fy',
    type: 'full stack web app',
    stack: 'Java, React, REST, Maven, Spring, Google Cloud',
    description: (
      <span>
        Full-stack web application for visualizing user’s Spotify listening data, featuring a stateless Java backend, hosted on Google Cloud, with multithreading for efficient processing. Implemented with a user-friendly React frontend, hosted on Netlify, complementing the backend's MVC and RESTful architecture for a cohesive and scalable solution. Utilized Docker for assistance with build testing and Maven for build management
        <br />

      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://data-fy.netlify.app/',
      },
      {
        name: 'demo',
        link: '/datafydemo',
      },
      {
        name: 'code',
        link: 'https://github.com/valentinojosh/data-fy',
      },
    ],
  },
  {
    color: PURPLE,
    image: CloudJams,
    mini: MiniCloudJams,
    name: 'cloud-jams',
    type: 'Lambda function',
    stack: 'Java, AWS',
    description: (
      <span>
        AWS Lambda function triggered weekly by CloudWatch Events. Queries the Spotify API for the global top 5 songs. Commits to Github repository, storing each week in a text file.
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
    color: PURPLE,
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
        link: 'https://valentinojosh.github.io/ims-prototype/documentation',
      },
      {
        name: 'code',
        link: 'https://github.com/valentinojosh/ims',
      },
    ],
  },
  // {
  //   color: PURPLE,
  //   image: Yahtzee,
  //   mini: MiniYahtzee,
  //   name: 'yahtzee',
  //   type: 'web app',
  //   stack: 'HTML, CSS, JS, jQuery',
  //   description: (
  //     <span>
  //
  //
  //       First web app I created freshman year of University
  //       <br />
  //       <br />
  //         I grew up playing Yahtzee with my mom; I still enjoy playing. If you can beat my high score of 291 feel free to{' '}
  //         <a
  //             href='https://www.linkedin.com/in/valentino-josh/'
  //             style={{ color: PURPLE }}
  //             target='_blank'
  //             rel='noopener noreferrer'
  //         >
  //             reach out
  //           </a>
  //         !
  //     </span>
  //   ),
  //   buttons: [
  //     {
  //       name: 'game',
  //       link: 'https://valentinojosh.github.io/Yahtzee_Valentino.html',
  //     },
  //     {
  //       name: 'code',
  //       link: 'https://github.com/valentinojosh/yahtzee',
  //     },
  //   ],
  // },
  // {
  //   color: PURPLE,
  //   image: StatsDB,
  //   mini: MiniStatsDB,
  //   name: 'stats db',
  //   type: 'database',
  //   stack: 'SQL, MySQL',
  //   description: (
  //     <span>
  //       Database exercise from University. Involved SQL, MySQL workbench, ERD design, table design, data sourcing, and query samples
  //     </span>
  //   ),
  //   buttons: [
  //     {
  //       name: 'site',
  //       link: 'https://valentinojosh.github.io/database.html',
  //     },
  //       {
  //           name: 'paper',
  //           link: 'https://valentinojosh.github.io/assets/pdfOverview.pdf',
  //       },
  //   ],
  // },
  {
    color: PURPLE,
    image: GitHub,
    mini: MiniGitHub,
    name: "github",
    type: 'repositories',
    stack: 'Java, React, SQL, AWS, GCP',
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
  }
];
