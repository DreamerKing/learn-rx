import { timer } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const s1$ = timer(0, 2000).pipe(map(x => 100 * x));
const s2$ = timer(500, 1000);
const s$ = s1$.pipe(withLatestFrom(s2$, (a, b) => a + b)); // s1具有主宰权
s$.subscribe(
    console.log,
    null,
    ()=> console.log("complete")
);

