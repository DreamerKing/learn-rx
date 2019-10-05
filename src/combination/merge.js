import { merge, timer, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

const s1$ = timer(0, 1000).pipe(map(x => x + 'A'));
const s2$ = timer(500, 1000).pipe(map(x => x + 'B'));
const s3$ = timer(500, 1000).pipe(map(x => x + 'C'));
const s$ = merge(s1$, s2$, s3$, 2);

s$.subscribe(console.log,
    null,
    () => console.log("complete")
);


/* 
const s1$ = of(1, 2, 3);
const s2$ = of(4, 5, 6);
const s3$ = interval(1000);
const s$ = merge(s1$, s2$);
const m$ = merge(s3$, s2$);

s$.subscribe(console.log);
// m$.subscribe(console.log); */



