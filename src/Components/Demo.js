import React from 'react';
import ReactPlayer from 'react-player';
import baseDemoVideoFile from '../Assets/IncompleteDemo.mp4';
import '../Styles/Error.css';
import Fade from '@material-ui/core/Fade';
import '../Styles/Projects.scss';
import Hidden from '@material-ui/core/Hidden';

const DemoCard = ({name, video}) => {
    const color = '#FF7C7C';
    return (
        <div className='DemoCard'>
            <div><span className='DemoCardMobile-header'>{name}</span>
                <div className='DemoCard-center' style={{backgroundColor: color}}/>

                <div className="video-container">
                    { video === 'dev'
                        ? <div style={{ color: 'white' }}>Coming soon</div>
                        : <ReactPlayer className="react-player" url={video} controls />
                    }
                </div>
            </div>
        </div>

    );
};

const DemoCardMobile = ({name, video}) => {
    const color = '#FF7C7C';

    return (
        <div className='DemoCardMobile'>
            <span className='DemoCardMobile-header'>{name}</span>
            <div className='DemoCardMobile-center' style={{backgroundColor: color}}/>

            <div className="video-container">
                { video === 'dev'
                    ? <div>Coming soon</div>
                    : <ReactPlayer className="react-player" url={video} controls />
                }
            </div>
        </div>
    );
};

const Demo = () => {
  return (
      <div>
      <Fade in timeout={{ enter: 1200 }}>
          <div className='projects-container'>
              <Hidden smDown>
                  <DemoCard name='Base Demo' video={baseDemoVideoFile}/>
                  <DemoCard name='Mobile Demo' video='dev'/>
                  <DemoCard name='Error Demo' video='dev'/>
              </Hidden>

              {/*mobile*/}
              <Hidden mdUp>
                  <DemoCardMobile name='Base Demo' video={baseDemoVideoFile}/>
                  <DemoCardMobile name='Mobile Demo' video='dev'/>
                  <DemoCardMobile name='Error Demo' video='dev'/>
              </Hidden>
          </div>
      </Fade>
      </div>
  );
};

export default Demo;
