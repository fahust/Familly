var jwt = require('jsonwebtoken');
var timeExpiration = 60000*60
var fs = require('fs');
const User = require('./user');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


//ownerVerified = jwt.verify(req.body.vin.owner, 'shhhhhh');
class Village {

    constructor(signed){
        /*this.village = village;
        this.signed = signed;
        this.userModule = new User(signed);*/
        this.listUser = {};
    }

    createVillager(id){
        var obj = {
            img:'',
            id:id,
            name: 'test',
            stats:{
              life:100,
              faim:85,
              soif:92,
              froid:75,
              bonheur:50,
            },
            job:{
              id:id,
              exp:{
                Blacksmithing:1,
                Lumberjack:1,
                Weaver:1,
                Fisherman:1,
                Hunter:1,
                Cooking:1,
                Breeder:1,
                Miner:1,
                Farmer:1,
              },
              work:{
                workName:'none',
                workValue:2,
                workMax:200,
              },
            },
          }
        return obj;
    }

    createUser(socket,data){
        //console.log(data)
        this.listUser[data.user.username] = data.user;
        this.listUser[data.user.username].villagers = {};
        var id = randomIntFromInterval(0,9999999)
        this.listUser[data.user.username].villagers[id]=this.createVillager(id);
        socket.emit('createOk', { villagers: this.listUser[data.user.username].villagers });
        //jwt.sign({ user: req.body.user.username ,iat:Date.now() }, this.signed)
    }

}

module.exports = Village;

