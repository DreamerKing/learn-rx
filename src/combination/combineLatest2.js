import { timer, of, combineLatest } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
const s1$ = timer(500, 1000);
const s2$ = s1$.pipe(map(x => x + 'A'));
const s3$ = s2$.pipe(map(x => x + 'B'));
const s123$ = s1$.pipe(withLatestFrom(s2$, s3$));
// const s123$ = combineLatest(s1$, s2$, s3$);
s123$.subscribe(console.log)