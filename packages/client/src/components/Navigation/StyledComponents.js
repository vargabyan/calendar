import styled from 'styled-components';

const NavigationStyles = styled('div')`
  width: 100%;
  height: 140px;
  display: flex;
  background: #f6f6f6;
  flex-direction: column;

  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #f6f6f6;
    width: 100%;
    margin-top: 14px;

    .today {
      background: #ff3131;
      color: white;
      border-radius: 25px;
      padding-top: 8px;
      padding-bottom: 10px;
      padding-right: 12px;
      padding-left: 12px;
      margin-top: 5px !important;
    }

    .items {
      width: 12.5%;
      flex-direction: column;
      display: flex;
      align-items: center;
    }

    .daysInWeek {
      display: flex;
      font-weight: 600;
      font-size: 24px;
      margin-top: 12px;
    }

    p {
      font-weight: 600;
      margin: 0;

      div & {
        display: flex;
      }
    }
  }

  .offset {
    width: 12.5%;
    display: flex;
  }

  .footer {
    padding-right: 4%;
    padding-left: 7%;
    margin-top: 8px;
    flex-direction: row;
    display: flex;

    .item {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    p {
      margin: 0;
      font-size: 22px;
      font-weight: 500;
    }

    button {
      padding: 0;
      height: 30px;
      cursor: pointer;
      border: unset;
      background: unset;
      color: #ff3131;

      & {
        margin-top: 5px;
        font-size: 30px;
      }
    }
  }
`;

export default NavigationStyles;
