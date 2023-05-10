import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import TopLineStyles from './StyledComponents';

const TopLine = ({ setHandleModal }) => {
  const handleClickAdd = () => {
    setHandleModal(true);
  };

  return (
    <TopLineStyles>
      <div>
        <p>Interview Calendar</p>
        <button onClick={handleClickAdd}>
          <IoIosAdd />
        </button>
      </div>
    </TopLineStyles>
  );
};

export default TopLine;
