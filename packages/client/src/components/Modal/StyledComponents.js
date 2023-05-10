import styled from 'styled-components';

const ModalStyles = styled('div')`
  .background {
    background: black;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .modal {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    width: 300px;
    height: 185px;
    margin-left: -150px;
    background: #e6e6e7;
    border-radius: 20px;
    top: 30%;

    .body {
      div & {
        flex: 100%;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title {
      margin: 0;
      font-weight: 600;
      font-size: 18px;
      margin-top: 20px;
    }

    .text {
      margin: 0;
      font-size: 14px;
    }

    input {
      margin-top: 15px;
      width: 245px;
      padding: 5px;
      border: unset;

      :focus-visible {
        outline-color: #69697d6b;
        outline-style: solid;
        caret-color: #007aff;
      }
    }

    .buttonBoxLeft {
      border-right: solid 1px #69697d6b;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
    }

    .buttonBoxRight {
      display: flex;
      height: 48px;
      align-items: center;
      width: 150px;
      justify-content: center;
    }

    .footer {
      border-top: solid 1px #69697d6b;
      margin-top: 15px;
      display: flex;
      width: 100%;
      justify-content: center;
    }

    button {
      color: #007aff;
      background: unset;
      padding: 0;
      border: unset;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export default ModalStyles;
