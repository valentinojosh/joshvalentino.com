import React from 'react';

import Datafy from './Assets/datafy.png';
import CloudJams from './Assets/cloudjams.png';
import IM from './Assets/im.png';
import GitHub from './Assets/github.png';
import RxSense from './Assets/rx.jpg';

import MiniDatafy from './Assets/mini-datafy.png';
import MiniCloudJams from './Assets/mini-cloudjams.png';
import MiniIM from './Assets/mini-im.png';
import MiniGitHub from './Assets/mini-github.png';
import MiniRxSense from './Assets/mini-rx.jpg';


export const PURPLE = '#9c88f7';

export const ALMOST_WHITE = '#F5F5F5';

export const projectInfo = [
  {
    color: PURPLE,
    image: Datafy,
    mini: MiniDatafy,
    name: 'spotify data analyzer',
    type: 'full stack web app',
    stack: 'Java, React, Maven, Spring, Google Cloud, Docker, REST',
    description: (
      <span>
        Built and deployed a cloud-based analytics service for Spotify listening data, designed as a standalone SaaS platform with production deployment on Google Cloud.
        Integrated with Spotify’s public API to securely access user data, leveraging REST and MVC architecture for clean, maintainable backend design.
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
    image: IM,
    mini: MiniIM,
    name: 'incident management system',
    type: 'full stack web app',
    stack: 'React, Node.js, SQL, REST',
    description: (
        <span>
          Full-stack incident management system built in a collaborative Agile environment, replacing paper-based forms, reducing retrieval time by 75%, and
          eliminating form loss.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://valentinojosh.github.io/ims-documentation',
      },
    ],
  },
  {
    color: PURPLE,
    image: RxSense,
    mini: MiniRxSense,
    name: 'rxsense',
    type: '',
    stack: 'C#, Python, AWS, sFTP',
    description: (
        <span>
          Internal tools and projects at rxsense. For more information, feel free to <a
            href='mailto:valentinojosh48@gmail.com'
            target='_blank'
            style={{color: PURPLE}}
            rel='noopener noreferrer'
            title='valentinojosh48@gmail.com'
        >
                  reach out
                </a>
      </span>
    ),
    buttons: [
      {
        name: 'None',
        link: '',
      },
    ],
  },
  {
    color: PURPLE,
    image: CloudJams,
    mini: MiniCloudJams,
    name: 'automated api query',
    type: 'Lambda',
    stack: 'Java, AWS, JGit, Spotify API',
    description: (
        <span>
        AWS Lambda function triggered weekly by CloudWatch Events.
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
    image: GitHub,
    mini: MiniGitHub,
    name: "github",
    type: 'repositories',
    stack: 'None',
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
