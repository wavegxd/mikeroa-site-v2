import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import GlobalStyle from '../styles/globalstyle';
import LayoutStyle from '../styles/layoutstyle';

const Layout = props => (
  <LayoutStyle>
    <GlobalStyle />
    <div className="container">
      <div className="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  </LayoutStyle>
);

export default Layout;
