import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostSummary from "./post-summary";

const PostsList = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          slug
          title
          date(formatString: "DD MMMM, YYYY")
          excerpt
        }
      }
    }
  `)
  return (
    <>
      {data.allWpPost.nodes.map(({id, title, date, excerpt, slug}) => {
        return <PostSummary key={id} slug={slug} title={title} date={date} exerpt={excerpt} />
      })}
    </>
  );
}

export default PostsList
