import { range, Observable, asapScheduler  } from "rxjs";
import { subscribeOn } from "rxjs/operators";

const s$ = Observable.create( observer => {
    console.log("on subscribe");
    observer.next(1);
    observer.next(2);
    observer.next(3);
    return () => {
        console.log("on unsubscribe");
    }
});

console.log("before");
s$.subscribe(
    console.log,
    console.error,
    () => console.log("complete")  
);

console.log("after");

const s2$ = s$.pipe(subscribeOn(asapScheduler))
console.log("before2");
s2$.subscribe(
    console.log,
    console.error,
    () => console.log("complete2")
);


console.log("after2");

