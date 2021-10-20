import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
import { ImBehance2 } from 'react-icons/im';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Luan Rosa</span>
        </h1>
        <p>
          I am a <Strong>Junior FrontEnd Developer</Strong>, graduated in
          Architecture and currently studying{' '}
          <Strong>Analysis and System Development</Strong>, with knowledge in{' '}
          <Strong>
            HTML5, CSS3, JavaScript, Angular, ReactJS, NodeJS, Python, API, etc
          </Strong>
          . I explore UX/UI Design concepts in my projects, always trying to
          keep them <Strong>simple, functional, and attractive</Strong>.
          <br />I am fluent in English, having Portuguese as my native language.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/luanrosa-info/?locale=en_US"
            rel="noreferrer"
            target="_blank"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            rel="noreferrer"
            target="_blank"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            rel="noreferrer"
            target="_blank"
            className="icon i-youtube"
          >
            <ImBehance2 />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}
const Strong = styled.strong`
  font-weight: 900;
  text-transform: uppercase;
`;
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
