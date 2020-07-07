import React, { Component } from 'react';
import axios from 'axios';
import HealthBar from './HealthBar';
import Work from './Work';
import Objects from './Objects';


export default class Villager extends React.Component {
    constructor(props){
      super(props);
      this.state = this.props.villager;
      this.state.object = this.props.object
      this.state.service = this.props.service
      this.state.barMax = 100;
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      /*const vin = {
        name: this.state.name,
        desc: this.state.desc,
        owner: this.props.user
      };
  
      axios.post(`http://localhost:3000/vin/add`, { vin })
        .then(res => {
          if (res.data == 'Vin created'){
            this.props.addAlert('Un vin a était ajouté');
          }else{
            this.props.addAlert(res.data);
          }
          this.setState({add : true})
        });*/
    };

     
  
    render() {

    
      return (
        <div>
          

          <HealthBar max={this.state.barMax} value={this.state.stats.life} color={"red"}/>
          <HealthBar max={this.state.barMax} value={this.state.stats.faim} color={"#3A0404"}/>
          <HealthBar max={this.state.barMax} value={this.state.stats.soif} color={"blue"}/>
          <HealthBar max={this.state.barMax} value={this.state.stats.froid} color={"#48C9B0"}/>
          <HealthBar max={this.state.barMax} value={this.state.stats.bonheur} color={"#4BFF33"}/>
          
          
          <div>name : {this.state.name}</div>
          <Work job={this.state.job} object={this.state.object} service={this.state.service}/>
          <Objects object={this.state.object} service={this.state.service}/>
        </div>
      )
    }
  }
