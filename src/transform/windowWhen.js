import { timer } from 'rxjs';
import { windowWhen } from 'rxjs/operators';

const s$ = timer(0, 100);
const closeSelector = () => timer(400)
const r$ = s$.pipe(windowWhen(closeSelector)).subscribe(console.log)