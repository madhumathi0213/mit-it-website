import React from "react";



const Announcement = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex'}}>
        <div style={{ flex: 1, backgroundColor: '#003366',  }}>
          <p style={{fontSize:16, color: '#ffffff',padding: 2 }}>Announcement</p>
        </div>
        <div style={{ flex: 11, backgroundColor: '#AEDBF0	', padding: 2 }}>
          <marquee width='100%' direction='left'><p style={{ fontSize: 16 }}>New course: Artificial Intelligence</p></marquee>
        </div>
      </div>
    </div>
  )
}

export default Announcement;