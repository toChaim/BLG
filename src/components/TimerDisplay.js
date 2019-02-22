import React from 'react';

const leadZeor = num => Math.floor(num) > 9? `${Math.floor(num)}`:`0${Math.floor(num)}`; 

export default ({time = 0}) =>{
  const sec = Math.abs(time);

  return (<div className="TimerDisplay">
    {time < 0? '-' : ''}
    {Math.floor(sec/60/60%1000)}
    :{leadZeor(sec/60%60)}
    :{leadZeor(sec%60)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  </div>);
};