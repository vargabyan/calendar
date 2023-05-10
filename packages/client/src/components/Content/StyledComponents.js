import styled from 'styled-components';

const TopItemStyles = styled('div')`
  display: flex;

  .hourGrid {
    width: 12.5%;
    height: 30px;
  }

  .gridItem {
    width: 12.5%;
    height: 30px;
    border-bottom: solid 2px #e6e6e6;
    border-right: solid 2px #e6e6e6;

    div {
      width: 96%;
      height: 92%;
      margin: auto;
      cursor: pointer;
    }
  }
`;

const CenterItemStyles = styled('div')`
  .box {
    display: flex;
  }

  .hourGrid {
    width: 12.5%;
    height: 60px;

    p {
      color: #c0c0c0;
      margin: 0;
      text-align: end;
      margin-right: 10px;
      margin-top: -19px;
      font-size: 24px;
    }
  }

  .gridItem {
    width: 12.5%;
    height: 60px;
    border-bottom: solid 2px #e6e6e6;
    border-right: solid 2px #e6e6e6;

    div {
      width: 96%;
      height: 92%;
      margin: auto;
      margin-top: 2px;
      cursor: pointer;
    }
  }
`;

const BottomItemStyles = styled('div')`
  .box {
    display: flex;
  }

  .hourGrid {
    width: 12.5%;
    height: 30px;

    p {
      color: #c0c0c0;
      margin: 0;
      text-align: end;
      margin-right: 10px;
      margin-top: -19px;
      font-size: 24px;
    }
  }

  .gridItem {
    width: 12.5%;
    height: 30px;
    border-bottom: solid 2px #e6e6e6;
    border-right: solid 2px #e6e6e6;

    div {
      width: 96%;
      height: 92%;
      margin: auto;
      margin-top: 2px;
      cursor: pointer;
    }
  }
`;

export { TopItemStyles, CenterItemStyles, BottomItemStyles };
