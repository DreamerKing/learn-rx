import { concat, of, interval } from 'rxjs';
const s1$ = of(1, 2, 3);
const s2$ = of(4, 5, 6);
const s3$ = interval(1000);
const s$ = concat(s1$, s2$);
const m$ = concat(s3$, s2$);

//s$.subscribe(console.log);
m$.subscribe(console.log);

