import EventEmitter from 'events';
const eventHub = new EventEmitter();

eventHub.on("data", (info) => console.info(info));

eventHub.emit('data', "Hello");
eventHub.emit("data", "King");
