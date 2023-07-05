import React from "react";
import { styled } from "styled-components";

const styles = {
  

}


const Header = () => {
  return (
    <div style={{ padding: 16, backgroundColor: '#003366', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <img title={'logo'} alt={'logo-alter'} src={'https://imgur.com/gP3NLsZ.jpg'} style={{ width: 155, objectFit: 'contain', height: 90 }} />
        <div style={{ marginTop: 10 }}>
          <h1>Department of Information Technology</h1>
          <h4>Anna University - Madras Institue of Technology Campus</h4>
        </div>
      </div>
      <img title={'logo'} alt={'logo-alter'} src={'https://imgur.com/EOgsbac.jpg'} style={{ width: 255, objectFit: 'contain', height: 70 }} />
    </div>
  )
}

export default Header;