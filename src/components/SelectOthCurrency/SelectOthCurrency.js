import React from 'react';
import Flag from '../Flag/Flag';

const SelectOthCurrency = (props) => {
  return (
    <div>
    <Flag flag={props.othFlag}/>
    <select onChange={props.selectOthCurrency} >
      {props.data.map(currency =>
      <option key={currency._attributes.currency} value={currency._attributes.rate} onSelect={this.passFlag}>
      {currency._attributes.currency}
      </option>
      )}
    </select>
    </div>
  )
}

export default SelectOthCurrency;