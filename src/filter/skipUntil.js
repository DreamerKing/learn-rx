import { timer, interval, throwError } from 'rxjs';
import { takeUntil, skipUntil } from 'rxjs/operators';
const s$ = interval(1000);
const t$ = timer(5000);
const ts$ = s$.pipe(skipUntil(t$));
ts$.subscribe(console.log);
