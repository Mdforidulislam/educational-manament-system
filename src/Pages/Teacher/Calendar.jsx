import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const newStyle = {
    'border':'12px'
  }

  console.log(date);

  return (
    <div>
      <Calendar  onChange={onChange} value={date} style={newStyle}/>
    </div>
  );
};

export default MyCalendar;
