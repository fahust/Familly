import React, { Component } from 'react';
import axios from 'axios';


export default class Objects extends React.Component {
    constructor(props){
      super(props);
    }
  
    render() {
      var props = this.props;
      var objects = Object.keys(this.props.object.listObject).map(function(item, i){
        var object = props.object.listObject[item];
        if(object.consomable === true)
          var use = <button>Use object</button>
        return <div key={i}>
          {object.name}
          {use}
          <button onClick={() => props.object.deleteObject(object.id)}>Drop object</button>
          </div>
      })

      return (
          <div>
            {objects}
          </div>
      )
    }
  }
