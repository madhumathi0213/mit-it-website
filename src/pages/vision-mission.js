import React from 'react'
import Header from '../components/header/Header';
import NavigationBar from '../components/navBar/NavigationBar';
import { styled } from 'styled-components';
import Footer from '../components/footer/footer';

const Wrapper = styled.div`
.content-container {
  background-color:#F0F8FF;
  padding:70px;

  h2 {
    font-size:28px;
    font-weight:600;
    letter-spacing:1px;
    color:#003366;
  }
  p,ul {
    list-style:none;
    line-height:30px;
    font-size:16px;
    text-align:justify;
  }
  ul {
    padding-left:0
  }
}
.inner-content {
  background-color: #FFFFFF;
  padding:32px;
  border-radius:12px;
  box-shadow: -6px 7px 17px 0px rgba(0,0,0,0.1);
}

`

const VisionMission = () => {
  return (
    <Wrapper>
      <Header />
      <NavigationBar />
      <div className='content-container'>
        <div className='inner-content'>
        <h2>Vision</h2>
        <p>The Department of Information Technology pledges to educate students with conceptual knowledge and technical skills to forge ahead in the field of IT, while inculcating deep moral and ethical values to achieve excellence, by providing a vibrant academic and research environment in collaboration with industry.</p>
        <h2>Mission</h2>
        <ul>
          <li>- To inculcate in students a firm foundation in theory and practice of IT skills coupled with the thought process for disruptive innovation and research methodologies, to keep pace with emerging technologies.</li>
          <li>- To provide a conducive environment for all academic, administrative, and interdisciplinary research activities using state-of-the-art technologies.</li>
          <li>- To stimulate the growth of graduates and doctorates, who will enter the workforce as productive IT engineers, researchers, and entrepreneurs with necessary soft skills, and continue higher professional education with competence in the global market.</li>
          <li>- To enable seamless collaboration with the IT industry and Government for consultancy and sponsored research.</li>
          <li>- To cater to cross-cultural, multinational, and demographic diversity of students.</li>
          <li>- To educate the students on the social, ethical, and moral values needed to make significant contributions to society.</li>
        </ul>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default VisionMission;