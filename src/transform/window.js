import { timer } from 'rxjs';
import { window } from 'rxjs/operators';

const s$ = timer(0, 100);
const notifer$ = timer(0, 400);
const r$ = s$.pipe(window(notifer$)).subscribe(console.log);
