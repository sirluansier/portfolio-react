import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'resume'} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={'Working Experience'} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={'2021 - Present'}
            title={'Freelancer Developer'}
            subTitle={'FrontEnd Development'}
            text={
              'As a freelancer, I have been able to work to help people develop and enhance their businesses by creating websites for small companies to attract and convert clients by using techniques from UX/UI Design. I have been using ReactJS the most, creating reusable components and SPA. Exploring many JavaScript libs.'
            }
          />
          <ResumeItem
            year={'2018 - 2021'}
            title={'Teaching Supervisor'}
            subTitle={'USK Callan Method'}
            text={
              'As a supervisor at an English School, I have been able to lead a small team and also improve my English skills. '
            }
          />
          {/* <ResumeItem
            year={'2010 - 2017'}
            title={'User Interface Designer'}
            subTitle={'Google Inc'}
            text={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '
            }
          /> */}
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={'Educational Qualifications'} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={'2021 - 2022'}
            title={'Analysis and System Development Degree'}
            subTitle={'Cruzeiro do Sul Virtual'}
            // text={
            //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '
            // }
          />
          <ResumeItem
            year={'2019 - 2021'}
            title={'Computer Science (unfinished)'}
            subTitle={'Estacio de Sa Virtual'}
            // text={
            //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '
            // }
          />
          <ResumeItem
            year={'2015 - 2016'}
            title={'Intensive English as a Second Language'}
            subTitle={'University of Utah'}
            // text={
            //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '
            // }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
