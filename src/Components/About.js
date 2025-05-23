import React from "react";
import ProgressiveImage from "react-progressive-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

import "../Styles/About.css";
import {PURPLE} from "../constants";
import Portrait from "../Assets/portrait.png";
import MiniPortrait from "../Assets/mini-portrait.png"


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
                I'm Josh Valentino. I'm an experienced swe with a proven track record of solving complex problems,
                driving optimizations, and demonstrating exceptional communication skills. Seeking to innovate,
                collaborate, and continue in lifelong learning.

                <br/>
                <br/>
                For more information on my experience, education, and skills feel free to send me an {" "}
                <a
                    href='mailto:valentinojosh48@gmail.com'
                    target='_blank'
                    style={{color: PURPLE}}
                    rel='noopener noreferrer'
                    title='valentinojosh48@gmail.com'
                >
                  email
                </a>
                !
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
