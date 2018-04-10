import React, { Component } from 'react';
import convert from 'xml-js';
import './App.css';

import SelectMyCurrency from '../SelectMyCurrency/SelectMyCurrency';
import SelectOthCurrency from '../SelectOthCurrency/SelectOthCurrency';
import InputValue from '../InputValue/InputValue';
import OutputValue from '../OutputValue/OutputValue';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currencyObject: [],
      currentCurrency: 0,
      proposedCurrency: 0,
      inputValue: 1,
      outputValue: 1
    }
  }

  selectMyCurrency = (event) => {
    this.setState({
      currentCurrency: event.target.value
    }, () => {this.updateInputValue();});
  }

  selectOthCurrency = (event) => {
    this.setState({
      proposedCurrency: event.target.value
    }, () => {this.updateOutputValue();});
  }

  calculateInput = (event) => {
    let value = event.target.value;
    this.setState({
      inputValue: value,
      outputValue: value * (this.state.proposedCurrency / this.state.currentCurrency)
    });
  }

  calculateOutput = (event) => {
    let value = event.target.value;
    this.setState({
      inputValue: value* (this.state.proposedCurrency / this.state.currentCurrency),
      outputValue: value 
    });
  }

  updateInputValue = () => {
    this.setState({
      inputValue: this.state.outputValue * (this.state.proposedCurrency / this.state.currentCurrency)
    });
  }

  updateOutputValue = () => {
    this.setState({
      outputValue: this.state.inputValue * (this.state.proposedCurrency / this.state.currentCurrency)
    });
  }

  componentDidMount(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml');
    xhr.onload = () => {
      if (xhr.status === 200) {
        let xmlDoc = convert.xml2json(xhr.responseText, {compact: true, spaces: 4});
        let xmlJson = JSON.parse(xmlDoc);
        let currencies = xmlJson["gesmes:Envelope"].Cube.Cube.Cube;
        this.setState({
          currencyObject: currencies,
          currentCurrency: currencies[0]._attributes.rate,
          proposedCurrency: currencies[0]._attributes.rate
        }, () => {
          this.updateInputValue(); 
          this.updateOutputValue();
        });
      }
      else {
          alert('Request failed.  Status: ' + xhr.status);
      }
    };
    xhr.send();
  }

  render() {
    const { currencyObject, inputValue, outputValue } = this.state;
    if(currencyObject.length < 1){
      return <h1>Loading...</h1>
    }
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <div className="App-flex-1">
          <SelectMyCurrency data={ currencyObject } selectMyCurrency={this.selectMyCurrency}/>
          <SelectOthCurrency data={ currencyObject } selectOthCurrency={this.selectOthCurrency}/>
        </div>
        <div className="App-flex-1">
          <InputValue calculateInput={this.calculateInput} inputValue={inputValue}/>
          <OutputValue calculateOutput={this.calculateOutput} outputValue={outputValue}/>
        </div>
      </div>
    );
  }
}

export default App;
