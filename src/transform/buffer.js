import { timer } from 'rxjs';
import { buffer } from 'rxjs/operators';

const s$ = timer(0, 100);
const notifer$ = timer(0, 400);
const r$ = s$.pipe(buffer(notifer$)).subscribe(console.log);
