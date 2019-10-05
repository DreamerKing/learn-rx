import { interval, pipe } from "rxjs";
import {  take } from "rxjs/operators";

const tick$ = interval(1000).pipe(take(3));

tick$.subscribe(value => console.log("observer1: ", value));

setTimeout(() => {
    tick$.subscribe(value => console.log("observer2: ", value));    
}, 2000);