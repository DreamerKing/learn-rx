import { interval, Subject, of } from "rxjs";
import { map, take, multicast } from "rxjs/operators";

const subject = new Subject();
const tick1$ = interval(1000).pipe(take(10));

const selector = shared => shared.concat(of('done'))
tick1$.pipe(multicast(subject, selector ));

tick1$.subscribe(value => console.log('ob1:', value));
setTimeout(() => {
  tick1$.subscribe(value => console.log("ob2:", value)); 
}, 5000)
