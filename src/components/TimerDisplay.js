import React from 'react';

const leadZeor = num => Math.floor(num) > 9? `${Math.floor(num)}`:`0${Math.floor(num)}`; 

export default ({time}) =>{
  const sec = time/1000 + time.getTimezoneOffset()*60;

  return (<div className="TimerDisplay">
    {Math.floor(sec/60/60%24)}
    :{leadZeor(sec/60%60)}
    :{leadZeor(sec%60)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  </div>);
};