import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
  <div>
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        My name is Michael Roa, I'm a full-stack developer specializing in React
        on the frontend and Nodejs on the backend, with some GraphQL sprinkled
        in.
      </p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  </div>
);

export default AboutPage;
