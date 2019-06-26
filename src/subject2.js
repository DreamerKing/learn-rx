import { interval, Subject } from "rxjs";
import { map, take } from "rxjs/operators";

const subject = new Subject();
subject.subscribe(
  value => console.log('data 1:', value),
  err => console.error('err 1:', err),
  () => console.log("complete 1")
)

subject.next(1);
subject.next(2);
subject.error(new Error("oops!"))
// subject.complete();

subject.subscribe(
    value => console.log("data 2:", value),
    err => console.error('err 2:', err),
    () => console.log("complete 2")
  );

subject.next(3);
