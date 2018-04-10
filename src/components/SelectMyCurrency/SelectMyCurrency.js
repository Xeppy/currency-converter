import React, { Component } from 'react';
import Flag from '../Flag/Flag';

class SelectMyCurrency extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <Flag />
      <select onChange={this.props.selectMyCurrency} ref="myCurrency">
        {this.props.data.map(currency =>
        <option key={currency._attributes.currency} value={currency._attributes.rate}>
        {currency._attributes.currency}
        </option>
        )}
      </select>
      </div>
    )
  }
}


export default SelectMyCurrency;