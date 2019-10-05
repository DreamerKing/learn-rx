import { of } from 'rxjs';  
import { mapTo } from 'rxjs/operators';

const s$ = of(2, 4, 5, 8);
const r$ = s$.pipe(mapTo("$"));
r$.subscribe(console.log);