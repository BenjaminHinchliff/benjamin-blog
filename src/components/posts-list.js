import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import PostSummary from './post-summary';

const PostsList = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: {fields: date, order: DESC}) {
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
          <div key={id}>
            <PostSummary {...{title, date, excerpt, slug}} />
            {i !== posts.length - 1 && <hr />}
          </div>
        );
      })}
    </>
  );
};

export default PostsList;
