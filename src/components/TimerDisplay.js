import React from 'react';

const leadZeor = num => Math.floor(num) > 9? `${Math.floor(num)}`:`0${Math.floor(num)}`; 

export default ({time}) =>{
  // track sign for negative numbers
  const sign = time < 0? -1 : 1;
  // convert to local seconds and make a positive number
  const sec = (time/1000 - time.getTimezoneOffset()*60) * sign;

  return (<div className="TimerDisplay">
    {Math.floor(sign*sec/60/60%24)}
    :{leadZeor(sec/60%60)}
    :{leadZeor(sec%60)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  </div>);
};