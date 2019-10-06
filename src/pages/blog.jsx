import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Blog from '../components/blog/Blog';
import '../styles/main.less';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={Blog}
  />
);
