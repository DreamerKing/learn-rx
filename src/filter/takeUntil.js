import { timer, interval, throwError } from 'rxjs';
import { takeUntil, forEach } from 'rxjs/operators';
const s$ = interval(1000);
const t$ = timer(5000);
const e$ = throwError('Custom Error!');
const ts$ = s$.pipe(takeUntil(t$));
// ts$.subscribe(console.log);

const es$ = s$.pipe(takeUntil(e$));
es$.subscribe(console.log);

