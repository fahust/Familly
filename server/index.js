const io = require('socket.io')();
var Village = require('./village.js');
const signed = Math.floor(Math.random(999999))

village = new Village(signed);

io.on('connection', socket => { 
    console.log('test');
    /*if(socket.connect === undefined){
        socket.emit('connected', 'connected !!');
        socket.on('create', (data) => {
            village.createUser(socket,data);
        });
    }
    socket.connect = true*/
    socket.on('create', (data) => {
        village.createUser(socket,data);
    });

    /*socket.on('subscribe', (data) => {
        socket.emit('subscribe', { resp: village.subscribe(data,socket) });
    });
    socket.on('connection', (data) => {
        socket.emit('connection', { resp: village.connection(data,socket) });
    });*/

 });

io.listen(12000);
console.log('Village Server Running')