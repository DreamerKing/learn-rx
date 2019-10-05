import { range, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const s$ = interval(1000)
    .pipe(takeWhile(x => x < 10))
    .subscribe(console.log, null, () => console.log("complete"));