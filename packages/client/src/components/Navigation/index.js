import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import NavigationStyles from './StyledComponents';

export const weekOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = ['2019', '2020'];

const daysInWeek = ['25', '26', '27', '28', '29', '30', '31'];
const today = '29';

const Navigation = () => (
  <NavigationStyles>
    <div className='body'>
      <div className='offset' />
      {weekOfDays.map((dayName, index) => (
        <div key={`key${index + Math.random()}`} className='items'>
          <div>
            <p>{dayName[0]}</p>
          </div>
          <div className={`daysInWeek ${daysInWeek[index] === today ? 'today' : ''}`}>{daysInWeek[index]}</div>
        </div>
      ))}
    </div>
    <div className='footer'>
      <div className='offset' />
      <div className='item'>
        <div>
          <button>
            <FiChevronLeft />
          </button>
        </div>
        <div>
          <p>
            {months[2]} {years[0]}
          </p>
        </div>
        <div>
          <button>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  </NavigationStyles>
);

export default Navigation;
