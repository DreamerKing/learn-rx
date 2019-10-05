import { timer } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

const s$ = timer(0, 100);
const r$ = s$.pipe(bufferCount(4, 5)).subscribe(console.log)