import styled from 'styled-components';

const TopLineStyles = styled('div')`
  width: 100%;
  height: 90px;
  display: flex;

  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 36px;
    padding-left: 36px;
  }

  p {
    font-size: 26px;
  }

  button {
    font-size: 36px;
    border: unset;
    background: unset;
    cursor: pointer;
    color: #ff3131;
    padding: 0;
    height: 36px;
    margin-top: 6px;
  }
`;

export default TopLineStyles;
