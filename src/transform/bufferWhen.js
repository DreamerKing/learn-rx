import { timer } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

const s$ = timer(0, 100);
const closeSelector = () => timer(400)
const r$ = s$.pipe(bufferWhen(closeSelector)).subscribe(console.log)