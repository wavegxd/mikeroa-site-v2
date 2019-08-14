import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';

import Layout from '../components/layout';
import Head from '../components/head';

const BlogPageStyle = styled.div`
  text-align: center;
  img {
    height: 400px;
    width: 600px;
  }
`;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = (props) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const { url } = node.data.target.fields.file['en-US'];
        return <img alt={alt} src={url} />;
      },
    },
  };

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <BlogPageStyle>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </BlogPageStyle>
    </Layout>
  );
};

export default Blog;
