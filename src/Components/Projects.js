import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { projectInfo } from '../constants';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';

import '../Styles/Projects.scss';

const isNone = (v) => !v || v === 'None';

const ProjectsCard = (props) => {
    const { color, image, mini, name, stack, description, buttons = [] } = props;

    const visibleButtons = buttons.filter((b) => b?.name && b.name !== 'None');

    const renderLinks = () =>
        visibleButtons.map((button) => {
            const { name: btnName, link } = button;

            return (
                <a key={`${btnName}-${link}`} href={link} target="_blank" rel="noopener noreferrer">
                    <div className="ProjectsCard-left-buttons-button" style={{ borderColor: color }}>
                        <span>{btnName}</span>
                    </div>
                </a>
            );
        });

    return (
        <div className="ProjectsCard">
            <div className="ProjectsCard-left">
                <ProgressiveImage src={image} placeholder={mini}>
                    {(src, loading) => (
                        <img style={{ opacity: loading ? 0.7 : 1 }} src={src} alt="project" />
                    )}
                </ProgressiveImage>

                {/* Keep spacing consistent even when stack is "None" */}
                {!isNone(stack) ? (
                    <div className="ProjectsCard-left-info">
                        <span className="ProjectsCard-left-info-left">stack</span>
                        <span className="ProjectsCard-left-info-right" style={{ color }}>
              {stack}
            </span>
                    </div>
                ) : (
                    // spacer so buttons don't jump up when stack is absent
                    <div className="ProjectsCard-left-info" aria-hidden="true">
                        &nbsp;
                    </div>
                )}

                {visibleButtons.length > 0 && (
                    <div className="ProjectsCard-left-buttons">{renderLinks()}</div>
                )}
            </div>

            <div className="ProjectsCard-center" style={{ backgroundColor: color }} />

            <div className="ProjectsCard-right">
                <span className="ProjectsCard-right-header">{name}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};

const ProjectsCardMobile = (props) => {
    const { color, name, stack, description, buttons = [] } = props;

    const visibleButtons = buttons.filter((b) => b?.name && b.name !== 'None');

    const renderLinks = () =>
        visibleButtons.map((button) => {
            const { name: btnName, link } = button;

            return (
                <a key={`${btnName}-${link}`} href={link} target="_blank" rel="noopener noreferrer">
                    <div className="ProjectsCardMobile-buttons-button" style={{ borderColor: color }}>
                        <span>{btnName}</span>
                    </div>
                </a>
            );
        });

    return (
        <div className="ProjectsCardMobile">
            <span className="ProjectsCardMobile-header">{name}</span>

            {/* Keep spacing consistent even when stack is "None" */}
            {!isNone(stack) ? (
                <div className="ProjectsCardMobile-grid">
                    <span className="ProjectsCardMobile-grid-left">stack</span>
                    <span className="ProjectsCardMobile-grid-right" style={{ color }}>
            {stack}
          </span>
                </div>
            ) : (
                // spacer so buttons don't jump up when stack is absent
                <div className="ProjectsCardMobile-grid" aria-hidden="true">
                    &nbsp;
                </div>
            )}

            {visibleButtons.length > 0 && (
                <div className="ProjectsCardMobile-buttons">{renderLinks()}</div>
            )}

            <div className="ProjectsCardMobile-center" style={{ backgroundColor: color }} />
            <p>{description}</p>
        </div>
    );
};

const Projects = () => {
    return (
        <Fade in timeout={{ enter: 1200 }}>
            <div className="projects-container">
                <Hidden smDown>
                    {projectInfo.map((project) => (
                        <ProjectsCard key={project.name} {...project} />
                    ))}
                </Hidden>
                <Hidden mdUp>
                    {projectInfo.map((project) => (
                        <ProjectsCardMobile key={project.name} {...project} />
                    ))}
                </Hidden>
            </div>
        </Fade>
    );
};

export default Projects;
