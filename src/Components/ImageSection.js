import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import cv from '../img/luan-rosa-cv.pdf';

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Luan Rosa</span>
        </h4>
        <p className="paragraph">
          I have two dreams: conquering the world and helping people who have
          the same dream to make it happen. <br />
          I am a Junior Developer, graduated in Architecture and currently
          studying Analysis and System Development, with knowledge in HTML5,
          CSS3, JavaScript, Angular, ReactJS, NodeJS, Python, API, etc. I
          explore UX/UI Design concepts in my projects, always trying to keep
          them simple, functional, and attractive. <br />I am fluent in English,
          having Portuguese as my native language. <br />
          Knowledge about: <br />
          #HTML #CSS #JavaScript #Angular #ReactJS #UX #UI #Scrum #NodeJS #REST
          #Python
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Luan de Souza Rosa</p>
            <p>: 28</p>
            <p>: Brazilian </p>
            <p>: Portuguese, English </p>
            <p>: Pouso Alegre, Brazil</p>
            <p>: Freelance</p>
          </div>
        </div>
        <Download href={cv} target="_blank">
          Download CV
        </Download>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
const Download = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default ImageSection;
