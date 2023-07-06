import React from "react";
import { Link } from "gatsby";
import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 2%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  .link {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500
  }

`



const NavigationBar = () => {
  return (
    <Wrapper style={{ }}>
      <Link
        to="/"
        className="link"
      >
        About us
      </Link>
      <Link
        to="/vision-mission"
        className="link"
      >
        Vision&mission
      </Link>
      <Link
        to="/companies-visited"
        className="link"
      >
        Companies visited
      </Link>
      {/* <Link
        to="/"
        className="link"
      >
        HOD's Message
      </Link> */}
      <Link
        to="/in-progress"
        className="link"
      >
        Administration
      </Link>
      <Link
        to="/in-progress"
        className="link"
      >
        Academics
      </Link>
      <Link
        to="/in-progress"
        className="link"
      >
        Facilities
      </Link>
      <Link
        to="/in-progress"
        className="link"
      >
        Library
      </Link>
      <Link
        to="/in-progress"
        className="link"
      >
        Student's Corner
      </Link>
    </Wrapper>
  )
}
export default NavigationBar;