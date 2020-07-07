import React, { Component } from 'react';
import axios from 'axios';
import Villager from './Villager/Villager';
import Connect from './User/userConnect';
import Register from './User/userCreate';
//import Carousel from 'react-native-snap-carousel';
import Carousel from "flat-carousel";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:12000');

export default class Familly extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        connected:false,
        service:{
          setVillager : this.setVillager,
          addSkillJob : this.addSkillJob,
          season:{},
        },
        villagerId :0,
        villagers:{},
        object:{
          listObject:[],
          addObject : this.addObject,
          deleteObject : this.deleteObject,
        },
      }

      socket.on("createOk", data => {
        //console.log(this.state)
        //console.log(data)
        this.setState({villagers:data.villagers})
      });


      setInterval(() => {
        //stats
      }, 50);

    }

    addObject = object =>{
      this.state.object.listObject[object.id]=object;
      this.setState({
        barMax: 100,
      })
    }

    useObject = object =>{
      if(object.name === 'Coocked meal')
      delete this.state.object.listObject[object.id];
      this.setState({
        barMax: 100,
      })
    }

    deleteObject = id =>{
      delete this.state.object.listObject[id];
      this.setState({
        barMax: 100,
      })
    }

    addSkillJob = (job,id) =>{
      if(this.state.villagers[id]){
        if(this.state.villagers[id].job.exp[job] < 100){
          this.state.villagers[id].job.exp[job] += 1/this.state.villagers[id].job.exp[job];
        }else{
          this.state.villagers[id].job.exp[job] = 100;
        }
      }
    }

    setVillager = villager =>{
      this.state.family.villager[villager.id]=villager;
      this.setState({
        barMax: 100,
      })
    }
  
  
    render() {
      var state = this.state;
      var carrousel = <div><Register socket={socket}/></div>;
      if(Object.keys(this.state.villagers).length > 0){
        carrousel = <Carousel autoplay={false}>
          {Object.keys(this.state.villagers).map(function(villager, i){
            return <div
              key={i}
              className="demo-item"
              style={{ backgroundImage: "url(" + state.villagers[villager].img + ")", backgroundSize: "cover"}}
            ><div className="bottom-card">
              <Villager villager={state.villagers[state.villagers[villager].id]} object={state.object} service={state.service}/>
              </div></div>
        })}
      </Carousel>
      }


      return (
        <div>
          {carrousel}
        </div>
      )
    }
  }
