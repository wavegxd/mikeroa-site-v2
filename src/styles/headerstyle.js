import styled from 'styled-components';

const HeaderStyle = styled.div`
  .header {
    padding: 1rem 0 3rem;
  }

  .title {
    color: #000000;
    font-size: 3rem;
    text-decoration: none;
  }

  .nav-list {
    display: flex;
    list-style-type: none;
    justify-content: center;
    margin: 0;
  }

  .nav-item {
    color: #999999;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
  }

  .nav-item:hover {
    color: #666666;
  }

  .active-nav-item {
    color: #333333;
  }
`;

export default HeaderStyle;
