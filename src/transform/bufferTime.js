import { timer } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

const s$ = timer(0, 100);
const r$ = s$.pipe(bufferTime(400)).subscribe(console.log)