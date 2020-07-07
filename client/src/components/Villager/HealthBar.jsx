import React, { Component } from 'react';
import axios from 'axios';


export default class HealthBar extends React.Component {
    constructor(props){
      super(props);
    }
  
    render() {
      const mystyle = {
        width: this.props.max,
        border: '1px solid',
        backgroundColor:'white',
        height:'10px',
        margin:'5px'
      };
      const mystyle2 = {
        width: this.props.value,
        backgroundColor:this.props.color,
        height:'10px',
        fontSize:'15px'
      };
      return (
          <div style={mystyle}><div style={mystyle2}></div></div>
      )
    }
  }
