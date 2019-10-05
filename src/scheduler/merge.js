import { asyncScheduler, asapScheduler, merge, range } from "rxjs";

const s1$ = range(1, 3);
const s2$ = range(12, 6);
const s$ = merge(s1$, s2$, asapScheduler);

console.time("time");
s$.subscribe(
    value => console.log("data: ", value),
    error => console.error("error: ", error),
    () => console.timeEnd("time")
);
console.log("After:");

