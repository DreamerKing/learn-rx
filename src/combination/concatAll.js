import { interval } from 'rxjs';
import { take, map, concatAll } from 'rxjs/operators';
const h$ = interval(1000)
            .pipe(take(2))
            .pipe(map(x => interval(1500)))  
            .pipe(take(2));
const c$ = h$.pipe(concatAll());

c$.subscribe(console.log)