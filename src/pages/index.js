import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import Head from '../components/head';

const HomeStyle = styled.div`
  text-align: center;
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  a {
    padding: 0.3rem;
    text-decoration: none;
  }
`;

const IndexPage = () => (
  <div>
    <Layout>
      <Head title="Home" />
      <HomeStyle>
        <h1>Michael Roa</h1>
        <h4>Software Engineer</h4>
        <div className="icons">
          <a href="https://github.com/wavegxd">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" color="black" />
          </a>
          <a href="https://twitter.com/wavegxd_">
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" color="black" />
          </a>
          <a href="mailto:roa.michael5@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" color="black" />
          </a>
        </div>
      </HomeStyle>
    </Layout>
  </div>
);

export default IndexPage;
