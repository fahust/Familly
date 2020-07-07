import React, { Component } from 'react';
import axios from 'axios';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function AddObject(selectObject,exp){
    //const randomObj = objPossible[Math.floor(Math.random() * objPossible.length)];
    var consomable = false;
    var equipable = false;
    if(selectObject === 'Cooked meal' || selectObject === 'Egg' || selectObject === 'Milk' ||  selectObject === 'Vegetables' ||  selectObject === 'Fruits' )
      consomable = true;
    if(selectObject === 'Cooked meal' || selectObject === 'Egg' || selectObject === 'Milk' ||  selectObject === 'Vegetables' ||  selectObject === 'Fruits' )
      equipable = true;
    var obj = {
      name : selectObject,
      durability : 1+randomIntFromInterval(0,exp),
      efficacity : 1+randomIntFromInterval(0,exp),
      consomable: consomable,
      equipable: equipable,
      id: randomIntFromInterval(0,99999999),
    }
    return obj;

  
}
  
  
