import { interval } from "rxjs";

import { take }from 'rxjs/operators';

const tick$ = interval(1000).pipe(take(3));

tick$.subscribe(value => console.log("observale 1 : " + value));

setTimeout(() => {
    tick$.subscribe(value => console.log("observale 2 : " + value)); 
}, 2000);

// 1. 单播(nuicast) 2. 广播(broadcast) 3. 多播(multicast) 

// hot observable 没有订阅依然产生数据 多播
// 1. fromPromise 2. fromEvent 3. fromEventPattern

// cold observable 只有订阅了才产生数据 单播
// 1. interval 2. range