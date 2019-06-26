import { interval, Subject } from "rxjs";
import { map } from 'rxjs/operators'

import { take } from "rxjs/operators";

const tick$ = interval(1000).pipe(take(3));
const subject = new Subject();

// const subscription = subject
// // .pipe(map(x => 2*x))
// .subscribe(
//     value => console.log('1 on data:', value),
//     err => console.error('1 on err', err),
//     () => console.log('1 complete!')
// )

//subject.next(1);
// subject
// //   .pipe(map(x => 2 * x))
//   .subscribe(
//     value => console.log("2 on data:", value),
//     err => console.error("2 on err", err),
//     () => console.log("2 complete!")
//   );
//subject.next(2);
// subscription.unsubscribe();
//subject.next(3);
//subject.complete();

tick$.subscribe(subject);
subject.subscribe(
    value => console.log("on data:", value)
  );

  setTimeout(() => {
    subject.subscribe(value => console.log("2 on data:", value));  
  }, 1500);
//tick$.subscribe(value => console.log("observale 1 : " + value));

// setTimeout(() => {
//   tick$.subscribe(value => console.log("observale 2 : " + value));
// }, 2000);
