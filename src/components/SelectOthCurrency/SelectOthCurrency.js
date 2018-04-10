import React, { Component } from 'react';
import Flag from '../Flag/Flag';

class SelectOthCurrency extends Component{
  constructor(props){
    super(props);
  }

  passFlag = () => {
    console.log("d");
  }

  render(){
    return (
      <div>
      <Flag />
      <select onChange={this.props.selectOthCurrency} >
        {this.props.data.map(currency =>
        <option key={currency._attributes.currency} value={currency._attributes.rate} onSelect={this.passFlag}>
        {currency._attributes.currency}
        </option>
        )}
      </select>
      </div>
    )
  }
}

export default SelectOthCurrency;