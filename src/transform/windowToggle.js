import { timer } from 'rxjs';
import { windowToggle } from 'rxjs/operators';

const s$ = timer(0, 100);
const opening = timer(0, 400);
const closeSelector = (value) => value % 2 === 0 ? timer(200): timer(100);
const r$ = s$.pipe(windowToggle(opening, closeSelector)).subscribe(console.log)