import * as React from "react"
import Announcement from "../components/announcement/Announcement"
import NavigationBar from "../components/navBar/NavigationBar"
import Header from "../components/header/Header"
import Overview from "../components/overview/Overview"

const IndexPage = () => {
  return (
    <div>
      <div><Header /></div>
      <NavigationBar />
      <Announcement />
      <Overview/>
    </div>

  )
}

export default IndexPage

export const Head = () => <title>MIT - IT</title>
