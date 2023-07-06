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
      <div className="overview-container">
        <div style={{ width: '50%' }}>
          <h2>Overview</h2>
          <p>
            The Department of Information Technology bequeaths students with the capability to apply knowledge of Information Technology to work efficiently in multidisciplinary teams and practice engineering with ethical approaches. The Department has excellent lab facilities which are being upgraded from time to time and provide ample opportunities for the students to learn and innovate. The students apply the recent trends of Information Technology like Artificial Intelligence, Data Analytics, Blockchain Technology, Internet of Things, Social Networks, and Cyber Forensics to develop innovative projects and solve the real world problems in the areas of Agriculture, Health care, Environmental Science, Telecommunications and Supply Chain sectors. The department has a team of committed and dedicated faculty as its core strength in providing education with professional standards to the enthusiastic and vibrant student community. The faculty member graduates the students to be globally recognized as innovative computing professionals. They adopt improved methods of teaching and learning process to achieve learning abilities through practice, exposure and motivation.
            The Department was granted the “Fund for Improvement of S&T Infrastructure (FIST)” by the Department of Science & Technology (DST) and has good infrastructural and computing facilities thereby providing a conducive environment to promote academic and research excellence in the department by successfully procuring and executing funded research projects.
          </p>
        </div>
      </div>
      <div className="message-container">
        <h2>HOD's Message</h2>
        <div className="hod-message">
          <img title={'logo'} alt={'logo-alter'} src={'https://imgur.com/PEvoB5k.jpg'} style={{ objectFit: 'contain', height: '50vh', width: '20%' }} />
          <div>
            <p>
              Dear Students,
            </p>
            <p>
                Welcome to the Department of Information Technology, Anna University, MIT Campus. As a well-known fact, we cannot imagine the world without information technology which has become an essential and inevitable part of our daily lives. The Department’s focus is to train our students to get strong academic knowledge in the recent trends of information technology like Artificial Intelligence, Data Analytics, Internet of Things, Social Networks, Mobile Applications, Machine Learning, and Blockchain Technology, to make the students ready to face real-world challenges. The Department has a rich blend of young and highly-experienced regular and teaching-fellow faculty members, all holding Ph.D degree. The faculty members display a high level of dedication and enthusiasm towards both teaching and state-of-the-art research.
                The Department faculties have sound knowledge in emerging research areas like Mobile Computing, Internet of Things, Artificial Intelligence, Machine Learning, Augmented Reality and Virtual Reality, Image and Video Analysis, Distributed and Cloud Computing Networks and Information Security, and Data Analytics. Our faculty members are continuing their respective research projects and publishing their research articles in reputed national and international journals.
                The department is active in organizing various workshops and seminars for the growth and development of faculty and students’ research knowledge. The department organizes International Conference ICRTIT (International Conference in the Recent Trends of Information Technology) to motivate research students and faculty to implement their innovative research ideas and to publish in the conference. The faculty members make use of the available standard research lab facilities in the department.
                At present, the department offers two four-year undergraduate programme, B. Tech Information Technology, B.Tech Artificial Intelligence and Data Science, a two-year postgraduate programme, M.Tech Information Technology and a Ph.D programme in the faculty of Information and Communication Engineering Specializations. The focus of these curriculums are in keeping in view with the current and upcoming industry requirements as well as the challenges of the future. The graduates of our Department of Information Technology have a wide range of career opportunities in Artificial Intelligence, Web Development, Mobile Applications, and Smart Systems.
            </p>
          </div>
        </div>
      </div>
      <div className="accomplishment-container">
        <h2>Accomplishments</h2>
        <div className="right-container">
          {
            data?.map((item, index) => {
              return (
                <div key={index} className="card-wrapper">
                  <h3 className="card-head">{item?.role}</h3>
                  <p className="card-count">{item?.count}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </OverviewWrapper>
  )
}

export default Overview;