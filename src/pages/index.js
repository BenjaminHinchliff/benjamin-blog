import * as React from "react"
import Layout from "../components/layout"
import PostsList from "../components/posts-list"

const IndexPage = ({ location }) => {
  return (
    <Layout title="Benjamin's Blog" location={location}>
      <PostsList />
    </Layout>
  )
}

export default IndexPage
