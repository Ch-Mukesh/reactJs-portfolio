import React from 'react';
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from '../../common/ThemeContext';
import CV from "../../assets/cv.pdf"
import styles from './HeroStyles.module.css';

function Hero() {
  const { theme, toggleTheme } = useTheme(); // Use useTheme to get theme and toggleTheme

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="hero-image" className={styles.heroImg} />
        <img src={themeIcon} alt="Theme Icon" className={styles.colorMode} onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Mikee</h1>
        <h2>FullStack Dev</h2>
        <span>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p>Learning FullStack Development & Working On A Basic Project..</p>
        <a href={CV} download>
            <button>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
