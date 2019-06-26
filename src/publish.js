import { Observable, interval, Subject, of } from "rxjs";
import { map, take, multicast, publish } from "rxjs/operators";

const subject = new Subject();
const tick$ = interval(1000).pipe(take(10));
const sharedTick$ = tick$.pipe(publish()).refCount();

sharedTick$.subscribe(value => console.log('ob1:', value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log("ob2:", value));  
}, 5000)


