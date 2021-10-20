import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
// import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from 'emailjs-com';

const Result = () => {
  return <p>Your message has been successfully sent.</p>;
};

function ContactPage() {
  const [result, showResult] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v2m2pbu',
        'template_evq6hi1',
        e.target,
        'user_xA6CkIoNme41iwqgbXyQR'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  // hide result

  setTimeout(() => {
    showResult(false);
  }, 5000);

  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className={'contact-section'}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" name="fullName" required />
              </div>
              <div className="form-field">
                <label htmlFor="email" name="email">
                  Enter your email*
                </label>
                <input type="email" id="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="form-field f-button">
                {/* <PrimaryButton title={'Send Email'}/> */}
                <ButtonForm>Submit!</ButtonForm>
                {result ? <Result /> : null}
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={'Phone'}
              icon={phone}
              cont1={'+55 35 998766122'}
            />
            <ContactItem
              title={'Email'}
              icon={email}
              cont1={'luansrosa.arq@gmail.com'}
            />
            <ContactItem
              title={'Address'}
              icon={location}
              cont1={'Pouso Alegre, Minas Gerais'}
              cont2={'Brazil'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
          resize: none;
        }
      }
    }
  }
`;

const ButtonForm = styled.button`
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

export default ContactPage;
