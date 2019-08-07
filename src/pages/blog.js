import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import BlogMainStyle from '../styles/blogmain';
import Head from '../components/head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <BlogMainStyle>
          <h1>Blog Posts</h1>
          <ol className="posts">
            {data.allContentfulBlogPost.edges.map((edge, index) => (
              <li key={index} className="post">
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            ))}
          </ol>
        </BlogMainStyle>
      </Layout>
    </div>
  );
};

export default BlogPage;
