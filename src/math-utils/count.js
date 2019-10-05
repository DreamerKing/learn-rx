import { of, timer } from 'rxjs';
import { count, concat } from 'rxjs/operators';

const s$ = of(1, 2, 4).pipe(concat(of(2, 4, 5, 6))).pipe(concat(timer(1000)));
const c$ = s$.pipe(count());

c$.subscribe(console.log);