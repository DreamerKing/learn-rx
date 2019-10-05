import { asapScheduler, range } from "rxjs";
import { observeOn } from "rxjs/operators";

const s$ = range(12, 3);
const asap$ = s$.pipe(observeOn(asapScheduler));
console.time("time");
asap$.subscribe(
    value => console.log("data: ", value),
    error => console.error("error: ", error),
    () => console.timeEnd("time")
);
console.log("After:");