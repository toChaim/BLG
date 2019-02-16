import React from 'react';

const leadZeor = num => Math.floor(num) > 9? `${Math.floor(num)}`:`0${Math.floor(num)}`; 

export default ({time = 0, local = true}) =>{
  // track sign for negative numbers
  const sign = time < 0? -1 : 1;
  // convert to time to local
  const sec = time - (local ? new Date().getTimezoneOffset()*60 : 0);


  return (<div className="TimerDisplay">
    {Math.floor(sec/60/60%24)}
    :{leadZeor(sign*sec/60%60)}
    :{leadZeor(sign*sec%60)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  </div>);
};