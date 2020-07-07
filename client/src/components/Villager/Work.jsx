import React, { Component } from 'react';
import axios from 'axios';
import HealthBar from './HealthBar';
import AddObject from './AddObject.js';


export default class Work extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        job:this.props.job,
        value:0,
        selectWork:'none',
        selectObject:[],
        selectedObject:'none',
        disabled:null,
      }
    }

    handleChange = event => {
      if(this.state.value <= 0 ){
        this.state.selectWork = event.target.innerHTML;
        if(event.target.innerHTML === 'Blacksmithing')
          this.setState({selectObject:["Bow","Knife","Sword","Fishing rod", "Axe", "Shovel", "Seal", "Pickaxe"]});
        if(event.target.innerHTML === 'Lumberjack')//Bûcheron
          this.setState({selectObject:["Wood"]});
        if(event.target.innerHTML === 'Weaver')//Tisseur
          this.setState({selectObject:["Warm clothing"]});
        if(event.target.innerHTML === 'Fisherman')//Pêcheur
          this.setState({selectObject:["Fish"]});
        if(event.target.innerHTML === 'Hunter')//Chasseur
          this.setState({selectObject:["Meat","Skin"]});
        if(event.target.innerHTML === 'Cooking')//Cuisinier
          this.setState({selectObject:["Cooked meal"]});
        if(event.target.innerHTML === 'Breeder')//Éleveur
          this.setState({selectObject:["Wool"/*laine*/,"Egg","Milk"]});
        if(event.target.innerHTML === 'Miner')//Éleveur
          this.setState({selectObject:["Steel"]});
        if(event.target.innerHTML === 'Farmer')//Cultivateur
          this.setState({selectObject:["Silk"/*soie*/,"Vegetables","Fruits","Hay"/*foin*/]});
    
      }
    }

    handleObject = event => {
      if(this.state.value <= 0 ){
        this.state.selectedObject = event.target.innerHTML
        //this.setState({selectedObject:event.target.innerHTML});
        this.handleSubmit();
      }
    }

    handleSubmit = () => {
      if(this.state.selectedObject !== 'none' && this.state.selectedObject !=='Please choose a work'){
        var interval = setInterval(() => {
          this.state.disabled = true;
          var value =  this.state.value + 1*this.state.job.exp[this.state.selectWork]
          if(this.state.value >= 200){
            var value = 0;
            this.state.disabled = null;
            clearInterval(interval);
            if(Math.floor(Math.random(100)) < 50){
              this.props.object.addObject(
                AddObject(this.state.selectedObject,this.state.job.exp[this.state.selectWork])
                );
              this.props.service.addSkillJob(this.state.selectWork,this.state.job.id)
            }
            this.state.selectedObject = 'none';
          }
          this.setState({value : value})
        }, 20);
      }
    }
  
    render() {
      
      if(this.state.selectedObject !== 'none')
      var work = <button onClick={this.handleSubmit}>work in progress
      <HealthBar max={200} value={this.state.value} color={"green"}/>
      </button>


      return (
          <div>
            <div>
              {Object.keys(this.state.job.exp).map((keyName, i) => (
                <button onClick={this.handleChange} key={i} disabled={this.state.disabled}>
                    {keyName}
                </button>
              ))}
            </div>
            <div>
              {this.state.selectObject.map((keyName, i) => (
                <button onClick={this.handleObject} key={i} disabled={this.state.disabled}>
                    {keyName}
                </button>
              ))}
            </div>
            {work}

          </div>
      )
    }
  }
