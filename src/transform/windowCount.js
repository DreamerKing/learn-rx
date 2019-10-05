import { timer } from 'rxjs';
import { windowCount } from 'rxjs/operators';

const s$ = timer(0, 100);
const r$ = s$.pipe(windowCount(4, 5)).subscribe(console.log)