import { interval, Subject, merge } from "rxjs";
import { map, take, mapTo } from "rxjs/operators";

const subject = new Subject();
const tick1$ = interval(1000).pipe(mapTo('a'),take(2));
const tick2$ = interval(1000).pipe(mapTo('b'),take(2));

const merged$ = merge(tick1$, tick2$);

merged$.subscribe(value => console.log("on data 1:", value));
merged$.subscribe(value => console.log("on data 2:", value));
