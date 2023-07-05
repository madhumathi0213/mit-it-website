import React from "react";
import { OverviewWrapper } from "./overview.css";

const data = [
  {
    role: 'Faculty',
    count: 23
  },
  {
    role: 'Staff',
    count: 11
  },
  {
    role: 'UG & PG Students',
    count: 467
  },
  {
    role: 'Full time Research Scholars',
    count: 13
  },
  {
    role: 'Part Time Research Scholars',
    count: 27
  },
  {
    role: 'Laboratories',
    count: 8
  },
  {
    role: 'Students pursuing higher studies',
    count: 3
  },
  {
    role: 'Highest CTC offered',
    count: '40 LPA'
  },
  {
    role: 'Placement Percent',
    count: '80%'
  },
  {
    role: 'Papers Published',
    count: 29
  },
  {
    role: 'Papers Published',
    count: 29
  },
  {
    role: 'Awards Received',
    count: 8
  },
  {
    role: 'R&D Projects',
    count: 78
  },
]

const Overview = () => {
  return (
    <OverviewWrapper>
      <div style={{ width: '50%' }}>
        <h2 style={{ fontWeight: 600, fontSize: 32, textAlign: 'left' }}>Overview</h2>
        <p style={{ fontSize: 16, lineHeight: 2, textAlign: 'justify' }}>
          The Department of Information Technology bequeaths students with the capability to apply knowledge of Information Technology to work efficiently in multidisciplinary teams and practice engineering with ethical approaches. The Department has excellent lab facilities which are being upgraded from time to time and provide ample opportunities for the students to learn and innovate. The students apply the recent trends of Information Technology like Artificial Intelligence, Data Analytics, Blockchain Technology, Internet of Things, Social Networks, and Cyber Forensics to develop innovative projects and solve the real world problems in the areas of Agriculture, Health care, Environmental Science, Telecommunications and Supply Chain sectors. The department has a team of committed and dedicated faculty as its core strength in providing education with professional standards to the enthusiastic and vibrant student community. The faculty member graduates the students to be globally recognized as innovative computing professionals. They adopt improved methods of teaching and learning process to achieve learning abilities through practice, exposure and motivation.
          The Department was granted the “Fund for Improvement of S&T Infrastructure (FIST)” by the Department of Science & Technology (DST) and has good infrastructural and computing facilities thereby providing a conducive environment to promote academic and research excellence in the department by successfully procuring and executing funded research projects.
        </p>
      </div>
      <div className="right-container">
        {
          data?.map((item, index) => {
            return (
              <div key={index} className="card-wrapper">
                <h3 style={{ fontSize: 24, margin: 0, fontWeight: 600 }}>{item?.role}</h3>
                <p style={{ fontSize: 28, margin: 0, }}>{item?.count}</p>
              </div>
            )
          })
        }
      </div>
    </OverviewWrapper>
  )
}

export default Overview;