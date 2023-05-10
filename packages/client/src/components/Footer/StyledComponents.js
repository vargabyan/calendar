import styled from 'styled-components';

const FooterStyles = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  height: 80px;

  p {
    border: unset;
    margin-left: 36px;
    background: unset;
    color: #fd4f4f;
    font-size: 24px;
  }
  button {
    border: unset;
    margin-right: 36px;
    padding: 0;
    background: unset;
    cursor: pointer;
    color: #fd4f4f;
    font-size: 24px;
  }
`;

export default FooterStyles;
