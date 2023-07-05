import React from "react";
import { Link } from "gatsby";



const NavigationBar = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', height: '2%', padding: 10, display: 'flex', justifyContent: 'space-between', paddingTop: 16, paddingBottom: 16 }}>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: 18, fontWeight: 500 }}
      >
        About us
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: 18, fontWeight: 500 }}
      >
        Vision & mission
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: 18, fontWeight: 500 }}
      >
        HOD's Message
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: 18, fontWeight: 500 }}
      >
        Administration
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: 18, fontWeight: 500 }}
      >
        Academics
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", fontSize: 18, fontWeight: 500 }}
      >
        Facilities
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", marginRight: 8, fontSize: 18, fontWeight: 500 }}
      >
        Library
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", marginRight: 8, fontSize: 18, fontWeight: 500 }}
      >
        Student's Corner
      </Link>


    </div>
  )
}
export default NavigationBar;