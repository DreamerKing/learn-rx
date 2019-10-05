import { timer } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

const s$ = timer(0, 100);
const r$ = s$.pipe(bufferTime(400, 200, 1)).subscribe(console.log)