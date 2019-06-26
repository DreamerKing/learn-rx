import { Observable, create, interval, Subject, of } from "rxjs";
import { map, take, multicast } from "rxjs/operators";

const subject = new Subject();
const tick$ = Observable.create(observer => {
  console.log("enter subscribe");
  interval(1000)
    .pipe(take(10))
    .subscribe(observer);
});

const selector = shared => {
  console.log("enter selector");
  return shared.concat(of('done'))
}

tick$.pipe(multicast(subject, selector ));

tick$.subscribe(value => console.log('ob1:', value));
tick$.subscribe(value => console.log("ob2:", value)); 

