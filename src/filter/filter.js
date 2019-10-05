import { range, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

const s$ = interval(1000)
    .pipe(filter(x => x > 2))
    .subscribe(console.log, null, ()=> console.log("complete"));

