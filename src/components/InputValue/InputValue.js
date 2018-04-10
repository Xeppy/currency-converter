import React from 'react'

const InputValue = (props) => {
  return (
    <div>
    <label htmlFor="inputValue">Enter a value</label>
    <input name="inputValue" onChange={props.calculateInput} value={props.inputValue}/>
    </div>
  )
}

export default InputValue;