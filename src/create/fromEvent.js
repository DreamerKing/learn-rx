import { fromEvent } from 'rxjs';
import EventEmitter from 'events';

const emitter = new EventEmitter();
const source$ = fromEvent(emitter, 'msg');

source$.subscribe(console.log, console.error, () => console.log("complete"));
emitter.emit('msg', 12);
emitter.emit('msg', 23);
emitter.emit('another', "Hello");
emitter.emit('msg', 100);
// fromEvent生产的hotObservable，即数据的产生与订阅无关，数据源不受RX控制

