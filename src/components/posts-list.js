import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import PostSummary from './post-summary';

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
  `);
  const posts = data.allWpPost.nodes;
  return (
    <>
      {posts.map(({id, title, date, excerpt, slug}, i) => {
        return (
          <>
            <PostSummary key={id} {...{title, date, excerpt, slug}} />
            {i !== posts.length - 1 && <hr />}
          </>
        );
      })}
    </>
  );
};

export default PostsList;
