import React from 'react'

const OutputValue = (props) => {
  return (
    <div>
    <label htmlFor="outputValue">Enter a value</label>
    <input name="outputValue" onChange={props.calculateOutput} value={props.outputValue}/>
    </div>
  )
}

export default OutputValue;