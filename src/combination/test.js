import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const soure$ = interval(1000)
    .pipe(take(2))
    .pipe(map(x => interval(1500).pipe(map(y => x + ":" + y))))
    .pipe(take(2))
    .subscribe(console.log)