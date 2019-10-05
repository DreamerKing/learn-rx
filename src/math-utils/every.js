import { of, interval } from 'rxjs';
import { every } from 'rxjs/operators';

const s$ = of(12, 34, 23, 45, 32).pipe(every(x => x > 20));
s$.subscribe(console.log)
const t$ = interval(1000).pipe(every((x => x < 3)));
t$.subscribe(console.log)
