import React from 'react';

const Flag = (props) => {
  return <img src={'http://www.countryflags.io/'+ props.flag.slice(0,2) +'/flat/64.png'} className="mr-2" alt={props.flag}/>
}

export default Flag;