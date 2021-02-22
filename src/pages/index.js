import * as React from "react"
import Header from "../components/header"
import Nav from "../components/nav"
import PostsList from "../components/posts-list"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header />
      <Nav to="/projects">Projects</Nav>
      <div className="content">
        <PostsList />
      </div>
    </main>
  )
}

export default IndexPage
