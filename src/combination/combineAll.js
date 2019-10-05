import { interval } from 'rxjs';
import { map, take, combineAll } from 'rxjs/operators';
const h$ = interval(1000).pipe(take(2))
    .pipe(map(x => interval(1500, x)
        .pipe(map((x, y) => x + ":" + y))))
    .pipe(take(2));
const m$ = h$.pipe(combineAll());
m$.subscribe(console.log)