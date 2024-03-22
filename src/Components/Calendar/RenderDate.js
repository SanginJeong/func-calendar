import React from 'react'
import { useState } from 'react'
import { format ,startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns'
const RenderDate = ({ current }) => {
  const currentMonth = format(current,'M');
  const monthStart = startOfMonth(current);
  const monthEnd = endOfMonth(current);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);
  console.log('ms :', monthStart,'me: ', monthEnd, 'wS:', weekStart, 'wE: ', weekEnd);
  
  const dateList = [];
  let date = weekStart;
  let formattedDate = '';
  while(date <= weekEnd){
    const weekList = [];
    for(let i=0; i<7; i++){
      formattedDate = format(date,'d');
      weekList.push(
        <td className = { format(date,'M') === currentMonth 
          ? 'date' 
          : 'otherMonthDate'} key = {formattedDate}>
            {formattedDate}
        </td>); 
      date = addDays(date,1);
    }
    dateList.push(weekList);
    console.log(dateList);  
  }
  return (
    <>
      {dateList.map((weekList,index)=>{
        return <tr>{weekList}</tr>
      })}
    </>
  )
}

export default RenderDate
