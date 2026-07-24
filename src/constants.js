import React from 'react';

import Datafy from './Assets/datafy.png';
// import CloudJams from './Assets/cloudjams.png';
import IM from './Assets/im.png';
import GitHub from './Assets/github.png';
import RxSense from './Assets/rx.jpg';
import Dumbbell from './Assets/JEMA GER 1723-11.jpg';
import Clipboard from './Assets/4368.jpg';

import MiniDatafy from './Assets/mini-datafy.png';
// import MiniCloudJams from './Assets/mini-cloudjams.png';
import MiniIM from './Assets/mini-im.png';
import MiniGitHub from './Assets/mini-github.png';
import MiniRxSense from './Assets/mini-rx.jpg';



export const PURPLE = '#9c88f7';

export const ALMOST_WHITE = '#F5F5F5';

export const projectInfo = [
  {
    color: PURPLE,
    image: RxSense,
    mini: MiniRxSense,
    name: 'rxsense',
    type: '',
    stack: 'SQL, C#, Python, AWS',
    description: (
        <span>
          Internal tools and projects at RxSense, supporting 400 million dollar organization software and systems.

          For more information, feel free to <a
            href="/contact"
            style={{color: PURPLE}}
            title='contact'
        >
                  reach out
                </a>.
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
    image: Dumbbell,
    mini: Dumbbell,
    name: 'TrainWise AI',
    type: '',
    stack: 'Custom GPT, Prompt Engineering, Knowledge Base, OpenAI',
    description: (
        <span>
      *In development* <br />An AI workout-planning and
      personal-training assistant designed to turn a user&apos;s goals,
      experience, schedule, available equipment, physical limitations, and
      ongoing feedback into clear, structured training plans.

      The initial version is being developed as a custom GPT focused on
      exercise selection, progression, technique guidance, recovery, and
      practical workout adjustments, with plans to eventually expand it into a
      standalone application.
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
    image: Clipboard,
    mini: Clipboard,
    name: 'ApplyPilot AI',
    type: '',
    stack: 'TypeScript, React, Chrome Extensions API, Node.js, OpenAI API, Structured Outputs',
    description: (
        <span>
      *In development* <br />An AI-powered Chrome extension that
      extracts job descriptions, compares them against a
      stored resume, and generates match scores, keyword gaps, suggests rewording, tailored professional summaries, and recruiter messages.

      Designed with privacy-conscious local storage and a
      secure backend, keeping resume data and preferences on the user&apos;s
      device while sending only user-requested content for AI analysis.
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
    image: Datafy,
    mini: MiniDatafy,
    name: 'spotify data analyzer',
    type: 'full stack web app',
    stack: 'Java, React, Maven, Spring, Google Cloud, Docker, REST',
    description: (
      <span>
        Built and deployed a cloud-based analytics service for Spotify listening data. Designed as a standalone SaaS platform with production deployment on Google Cloud.
        Integrated with Spotify’s public API to securely access user data, leveraging REST and MVC architecture for clean, maintainable backend design.
        <br />

      </span>
    ),
    buttons: [
      // {
      //   name: 'site',
      //   link: 'https://data-fy.netlify.app/',
      // },
      // {
      //   name: 'demo',
      //   link: '/datafydemo',
      // },
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
  // {
  //   color: PURPLE,
  //   image: CloudJams,
  //   mini: MiniCloudJams,
  //   name: 'automated api query',
  //   type: 'Lambda',
  //   stack: 'Java, AWS, JGit, Spotify API',
  //   description: (
  //       <span>
  //       Proof of concept cloud hosted automation.
  //     </span>
  //   ),
  //   buttons: [
  //     {
  //       name: 'chart',
  //       link: 'https://github.com/valentinojosh/cloud-jams/blob/main/WeeklyCharts/Charts.txt',
  //     },
  //     {
  //       name: 'code',
  //       link: 'https://github.com/valentinojosh/cloud-jams/',
  //     },
  //   ],
  // },
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
