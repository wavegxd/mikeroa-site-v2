import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutStyle = styled.div`
  text-align: center;
  table {
    font-size: 0.83rem;
  }
  td {
    border: none;
  }
`

const AboutPage = () => (
  <div>
    <Layout>
      <Head title="About" />
      <AboutStyle>
        <h3>About Me</h3>
        <p>
          <strong>Software Engineer</strong>
        </p>
        <table>
          <thead>
            <tr>
              <th>Front-End Skills</th>
              <th>Backend Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React</td>
              <td>Node.Js</td>
            </tr>
            <tr>
              <td>Next.js</td>
              <td>Express</td>
            </tr>
            <tr>
              <td>Apollo Client</td>
              <td>GraphQL</td>
            </tr>
            <tr>
              <td>GatsbyJS</td>
              <td>Ruby on Rails</td>
            </tr>
          </tbody>
        </table>
        <p>
          In my spare time I like to play World of Warcraft, Fortnite, MTG:
          Arena and League of Legends. When I decide to take a break from my
          computer I am either playing basketball or working out at the gym.
          Feel free to <a href="mailto:roa.michael5@gmail.com">contact me</a>.
        </p>
      </AboutStyle>
    </Layout>
  </div>
)

export default AboutPage
