import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FooterStyle from '../styles/footerstyle';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <FooterStyle>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </FooterStyle>
  );
};

export default Footer;
