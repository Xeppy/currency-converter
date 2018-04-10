import React from 'react';

const Flag = (props) => {
    let countryCode = 'US';
    let text;

    switch (1) {
        case 6:
            text = "Today is Saturday";
            break; 
        case 0:
            text = "Today is Sunday";
            break; 
        default: 
            text = "Looking forward to the Weekend";
    }
  return <img src={'http://www.countryflags.io/'+ countryCode +'/flat/64.png'} className="mr-2"/>     
  
}

export default Flag;