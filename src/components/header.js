import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import HeaderStyle from '../styles/headerstyle';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <HeaderStyle>
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className="nav-item"
                activeClassName="active-nav-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="nav-item"
                activeClassName="active-nav-item"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-item"
                activeClassName="active-nav-item"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderStyle>
  );
};

export default Header;
