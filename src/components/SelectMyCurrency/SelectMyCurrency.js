import React from 'react';
import Flag from '../Flag/Flag';

const SelectMyCurrency = (props) => {
  return (
    <div>
    <Flag flag={props.myFlag}/>
    <select onChange={props.selectMyCurrency}>
      {props.data.map(currency =>
      <option key={currency._attributes.currency} value={currency._attributes.rate} name={currency._attributes.currency}>
      {currency._attributes.currency}
      </option>
      )}
    </select>
    </div>
  );
}


export default SelectMyCurrency;