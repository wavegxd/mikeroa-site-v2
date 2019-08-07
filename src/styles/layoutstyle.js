import styled from 'styled-components';

// Page Layout style with sticky footer
const LayoutStyle = styled.div`
  .container {
    margin: 0 auto;
    max-width: 750px;
    padding: 1rem;
    /* Sticky Footer */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content {
    flex-grow: 1;
  }
  /* Sticky Footer End */
`;

export default LayoutStyle;
