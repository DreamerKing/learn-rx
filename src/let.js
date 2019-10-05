import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
const s$ = of(1, 2, 3);

/* 
const double = map(x => 2 * x);
const result = s$.pipe(double);
result.subscribe(console.log); 
*/
let result$ = s$
    |> filter( x => x % 2 == 0 )
    |> map(x => x * x);
result$.subscribe(console.log);