import { interval, Subject } from "rxjs";
import { multicast, take } from "rxjs/operators";

const cold$ = interval(1000).pipe(take(3));

const tick$ = cold$.pipe(multicast(new Subject())).refCount();

tick$.subscribe(value => console.log("observer 1:", value));   

/* setTimeout(() => {
    tick$.subscribe(value => console.log("observer 1:", value));   
}, 500); */

setTimeout(() => {
  tick$.subscribe(value => console.log("observer 2:", value));
}, 1500);

//tick$.connect();
