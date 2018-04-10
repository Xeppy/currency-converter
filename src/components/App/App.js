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
      outputValue: 1,
      currentCountry: 'USD',
      proposedCountry: 'USD'
    }
  }

  selectMyCurrency = (event) => {
    let index = event.nativeEvent.target.selectedIndex;
    this.setState({
      currentCurrency: event.target.value,
      currentCountry: event.nativeEvent.target[index].text
    }, () => {this.updateInputValue();});
  }

  selectOthCurrency = (event) => {
    let index = event.nativeEvent.target.selectedIndex;    
    this.setState({
      proposedCurrency: event.target.value,
      proposedCountry: event.nativeEvent.target[index].text
    }, () => {this.updateOutputValue();});
  }

  calculateInput = (event) => {
    let value = event.target.value;
    if(this.isNumeric(value) || value === 0){
      this.setState({
        inputValue: value,
        outputValue: (value * (this.state.proposedCurrency / this.state.currentCurrency)).toFixed(3)
      });
    }
  }

  calculateOutput = (event) => {
    let value = event.target.value;
    if(this.isNumeric(value) || value === 0){
      this.setState({
        inputValue: (value * (this.state.currentCurrency / this.state.proposedCurrency)).toFixed(3),
        outputValue: value 
      });
    }
  }

  updateInputValue = () => {
    this.setState({
      inputValue: (this.state.outputValue * (this.state.currentCurrency / this.state.proposedCurrency)).toFixed(3)
    });
  }

  updateOutputValue = () => {
    this.setState({
      outputValue: (this.state.inputValue * (this.state.proposedCurrency / this.state.currentCurrency)).toFixed(3)
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

  isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  render() {
    const { currencyObject, 
      currentCurrency, 
      proposedCurrency, 
      inputValue, 
      outputValue, 
      currentCountry, 
      proposedCountry
    } = this.state;
    if(currencyObject.length < 1){
      return (
      <div className="container">
        <h1>Loading...</h1>
        <p>You may have CORS enabled on your browser. Please disable it to continue</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.thepolyglotdeveloper.com/2014/08/bypass-cors-errors-testing-apis-locally/">Click here to learn more</a>
      </div>
    );
    }
    return (
      <div className="container App">
        <h1 className="mb-3">Currency Converter</h1>
        <div className="row justify-content-md-center">
        <div className="card dark col-sm-4" style={{width:'18rem'}}>
          <div className="card-body">
            <SelectMyCurrency className="card-title" data={ currencyObject } selectMyCurrency={this.selectMyCurrency} myFlag={ currentCountry }/>
            <h6 className="card-subtitle mb-2 text-muted">1 EUR = {currentCurrency} {currentCountry}</h6>
            <InputValue calculateInput={ this.calculateInput } inputValue={ inputValue }/>        
          </div>
        </div>
        <div className="m-3"></div>
        <div className="card dark col-sm-4" style={{width:'18rem'}}>
          <div className="card-body">
            <SelectOthCurrency data={ currencyObject } selectOthCurrency={ this.selectOthCurrency } othFlag={ proposedCountry }/>            
            <h6 className="card-subtitle mb-2 text-muted">1 EUR = {proposedCurrency} {proposedCountry}</h6>
            <OutputValue calculateOutput={ this.calculateOutput } outputValue={ outputValue }/>            
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
