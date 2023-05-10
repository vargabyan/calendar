import React, { useEffect, useState } from 'react';
import { BottomItemStyles, CenterItemStyles, TopItemStyles } from './StyledComponents';

const itS_08_OClock = ['08:00', [false, false, false, false, false, true, false]];
const hours = [
  ['09:00', [false, false, false, false, false, false, false]],
  ['10:00', [false, false, false, false, false, false, false]],
  ['11:00', [false, false, false, false, false, false, false]],
  ['12:00', [true, true, true, true, true, true, true]],
  ['13:00', [false, false, false, false, false, false, false]],
  ['14:00', [false, false, false, false, false, false, false]],
  ['15:00', [false, false, false, true, false, false, false]],
  ['16:00', [false, false, false, false, false, false, false]],
  ['17:00', [false, false, false, false, true, false, false]],
  ['18:00', [false, false, false, false, false, false, false]],
  ['19:00', [false, false, false, false, false, false, false]],
];
const itS_20_OClock = [['20:00', [false, true, false, false, false, false, false]]];

const collorEmptyGrid = 'white';
const colorCreatedTask = '#ebecff';
const colorSelectedGrid = '#B3B7FF';

const Items = ({ hoursData, hendelClick, ChoicedOrTaskColor }) =>
  hoursData.map((hour) => (
    <div className='box' key={`box_${itS_08_OClock[1]}_${Math.random()}`}>
      <div className='hourGrid'>
        <p>{hour[0]}</p>
      </div>
      {hour[1].map((key, index) => (
        <div className='gridItem' key={`gridItem_${itS_08_OClock[1]}_${Math.random()}`}>
          <div
            onClick={() => hendelClick(hour[0], index)}
            style={{ background: ChoicedOrTaskColor(hour[0], index, key) }}
          />
        </div>
      ))}
    </div>
  ));

const Content = ({ setHandleButtonDelete }) => {
  const [choiced, setChoiced] = useState({ row: '', grid: '0' });

  const hendelClick = (row, grid) => {
    if (choiced.row === row && choiced.grid === grid) {
      setChoiced({ row: '', grid: '' });
      setHandleButtonDelete(false);
    } else {
      setChoiced({ row, grid });
      setHandleButtonDelete(true);
    }
  };

  const ChoicedOrTaskColor = (row, grid, key) => {
    if (choiced.row === row && choiced.grid === grid) {
      return colorSelectedGrid;
    }
    if (key) {
      return colorCreatedTask;
    }
    return collorEmptyGrid;
  };

  useEffect(() => {}, [choiced]);

  return (
    <>
      <TopItemStyles>
        <div className='hourGrid' />
        {itS_08_OClock[1].map((key, index) => (
          <div className='gridItem' key={`${itS_08_OClock[1]}_${Math.random()}`}>
            <div
              onClick={() => hendelClick(itS_08_OClock[0], index)}
              style={{ background: ChoicedOrTaskColor(itS_08_OClock[0], index, key) }}
            />
          </div>
        ))}
      </TopItemStyles>
      <CenterItemStyles>
        <Items ChoicedOrTaskColor={ChoicedOrTaskColor} hoursData={hours} hendelClick={hendelClick} />
      </CenterItemStyles>
      <BottomItemStyles>
        <Items ChoicedOrTaskColor={ChoicedOrTaskColor} hoursData={itS_20_OClock} hendelClick={hendelClick} />
      </BottomItemStyles>
    </>
  );
};

export default Content;
