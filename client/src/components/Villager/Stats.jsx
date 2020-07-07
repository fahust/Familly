import React, { Component } from 'react';
import axios from 'axios';
import HealthBar from './HealthBar';


export default class Stats extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        stats:this.props.stats,
        value:0,
        selectWork:'none'
      }
    }

    handleChange = event => {
      var name = event.target.name 
      this.setState({selectWork : event.target.value });
    }

    handleSubmit = event =>{
      if(this.state.selectWork !== 'none' && this.state.selectWork !=='Please choose a work'){
        var interval = setInterval(() => {
          var value =  this.state.value + 1*this.state.job.exp[this.state.selectWork]
          if(this.state.value >= 200){
            var value = 0
            clearInterval(interval)
          }
          this.setState({value : value})
        }, 20);
      }
    }
  
    render() {
      return (
          <div>
            <select value={this.state.selectValue} 
                  onChange={this.handleChange} >
            <option >Please choose a work</option>
            {Object.keys(this.state.job.exp).map((keyName, i) => (
              <option key={i}>
                  {keyName}
              </option>
            ))}
            </select>
            <button onClick={this.handleSubmit}>Start work
            <HealthBar max={200} value={this.state.value} color={"green"}/>
            </button>

          </div>
      )
    }
  }
