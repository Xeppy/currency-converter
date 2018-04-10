import React from 'react'

const SelectOthCurrency = (props) => {
  return (
    <div>
    <select onChange={props.selectOthCurrency}>
      {props.data.map(currency =>
      <option key={currency._attributes.currency} value={currency._attributes.rate}>
      {currency._attributes.currency}
      </option>
      )}
    </select>
    </div>
  )
}

export default SelectOthCurrency;