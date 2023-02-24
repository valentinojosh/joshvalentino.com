import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

import "../Styles/About.css";
import { BLUE, YELLOW, PURPLE} from "../constants";
import Portrait from "../Assets/portrait.png";
import MiniPortrait from "../Assets/mini-portrait.png"
import res from "../Assets/resume.pdf";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    aboutGrid: {
      textAlign: "left",
      maxWidth: "80rem",
      [theme.breakpoints.up("sm")]: { marginBottom: "3rem" },
      [theme.breakpoints.down("sm")]: {
        padding: "0 4.5rem 3rem",
        minHeight: "calc(100vh - 3.5rem)",
      },
    },
    image: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "left",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "2rem 0px 3rem 0px",
        justifyContent: "center",
      },
    },
  }));

  const classes = useStyles();
  const { aboutGrid, image } = classes;

  return (
    <div className="about-container">
      <Grid className={aboutGrid} container>
        <Grid item sm={12} md={4} className={image}>
          <ProgressiveImage src={Portrait} placeholder={MiniPortrait}>
            {(src, loading) => (
              <img
                style={{ opacity: loading ? 0.8 : 1 }}
                src={src}
                alt="Josh"
              />
            )}
          </ProgressiveImage>
        </Grid>
        <Grid item sm={12} md={8}>
          <Fade in timeout={{ enter: 1200 }}>
            <div>
              <p>
                Hi{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏼
                </span>{" "}
                I'm Josh Valentino. I'm a passionate software engineer seeking to work collaboratively and continue in lifelong learning. I graduated Magna Cum Laude with a Bachelors of Science in Computer Science and I'm an AWS Certified Cloud Practitioner.

                <br />
                <br />
                Currently I work remotely as a production support engineer for{" "}
                <a
                  href="https://www.rxsense.com/"
                  style={{ color: BLUE }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RxSense
                </a>
                .
                <br />
                <br />
                I was born and raised here in Chicago, IL. If I'm
                not programming, you can find me working out, out with friends, or dreaming of Spain.
                <br />
                <br />
                Check out some of
                my{" "}
                <Link
                  to={`/projects`}
                  style={{
                    color: BLUE,
                  }}
                  className="internal-link"
                >
                  projects
                </Link>{" "}
                and feel free to{" "}
                <Link
                  to={`/contact`}
                  style={{
                    color: YELLOW,
                  }}
                  className="internal-link"
                >
                  connect
                </Link>
                !
                <br />
                <br />
                For more information on my experience, education, and skills check out my{" "}
                <Link
                    to={res}
                    target='_blank'
                    rel="noreferrer"
                    style={{
                      color: PURPLE,
                    }}
                    className="internal-link"
                >
                  resume
                </Link>
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
