import { interval, Subject } from "rxjs";
import { map, take } from "rxjs/operators";

const subject = new Subject();
const tick$ = interval(1000).pipe(take(5));

tick$.subscribe(subject);
subject.subscribe(
    value => console.log("on data:", value),
    err => console.error('error 2:', err),
    () => console.log("complete 2")
  );

  setTimeout(() => {
    subject.unsubscribe();  
  }, 2500);
