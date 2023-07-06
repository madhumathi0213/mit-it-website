import React from "react";
import { styled } from "styled-components";

const AnnouncementWrapper = styled.div`
  width:100%;
  .marquee-container {
    flex:11;
    background-color:#AEDBF0;
    padding:2
  }
  .title {
    flex:1;
    background-color:#003366;
    padding:4px;
    position:relative;
    p {
      font-weight:bold;
      font-size:16px;
      color:#ffffff;
    }
    ::before {
      content: "";
      position: absolute;
      top: 50%;
      z-index:1;
      right: -10px; /* Adjust the value to control the distance of the triangle from the box */
      transform: translateY(-50%);
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid #003366; /* Adjust the color and size of the triangle */
  }

`

const Announcement = () => {
  return (
    <AnnouncementWrapper>
      <div style={{ display: 'flex' }}>
        <div className="title">
          <p>Announcement</p>
        </div>
        <div className="marquee-container">
          <marquee width='100%' direction='left'><p style={{ fontSize: 16 }}>New course: Artificial Intelligence</p></marquee>
        </div>
      </div>
    </AnnouncementWrapper>
  )
}

export default Announcement;