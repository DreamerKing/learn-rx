import { of } from 'rxjs';
import { find, findIndex } from 'rxjs/operators';

const s$ = of(12, 34, 54, 90, 32);
const f$ = s$.pipe(find(x => x > 50));
f$.subscribe(console.log)