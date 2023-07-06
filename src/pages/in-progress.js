import React from 'react'
import Header from '../components/header/Header';
import NavigationBar from '../components/navBar/NavigationBar';
import { styled } from 'styled-components';

const Wrapper = styled.div`
.content-container {
  background-color:#F0F8FF;
  padding:70px;
  height:47vh;

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
  h2 {
    display:flex;
    align-items:center;
    justify-content:center;
  }
}

`

const InProgress = () => {
  return (
    <Wrapper>
      <Header />
      <NavigationBar />
      <div className='content-container'>
        <div className='inner-content'>
        <h2>In Progress!</h2>
        {/* <img title={'logo'} alt={'logo-alter'} src={'https://imgur.com/k8Cncp5.jpg'} style={{ width: '100%', objectFit: 'contain', height: '75vh' }} /> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default InProgress;