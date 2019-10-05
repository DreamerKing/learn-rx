import { fromEventPattern } from 'rxjs';
import EventEmitter from 'events';

const emitter = new EventEmitter();
const addHandler = (handler) => {
    emitter.addListener('msg', handler);
}
const removeHandler = (handler) => {
    emitter.removeListener('msg', handler);
}
const source$ = fromEventPattern(addHandler, removeHandler);

const subscription = source$.subscribe(console.log, console.error, () => console.log("complete"));
emitter.emit('msg', 122);
emitter.emit('msg', 231);
emitter.emit('another', "Hello");
emitter.emit('msg', 150);
subscription.unsubscribe();
emitter.emit('msg', "end");