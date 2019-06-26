import { interval, Subject } from "rxjs";
import { map, take } from "rxjs/operators";
import { throwUnluckNumber } from "./throwUnluckNumber";

const subject = new Subject();
const tick1$ = interval(1000).pipe(take(10));

tick1$.subscribe(subject);

subject
  .pipe(map(throwUnluckNumber))
  .subscribe(
    value => console.log("on data 1:", value),
   // err => console.error("err 1: ", err.message)
  );

subject.subscribe(
    value => console.log("on data 2:", value),
    err => console.error("err 2: ", err.message)
);
