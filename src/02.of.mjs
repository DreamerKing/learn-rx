import { of, interval } from 'rxjs';
import { concat } from 'rxjs/operators';

const source$ = of(1, 2, 3);

// source$.subscribe(console.log, null, () => console.log("complete."));

const letters = of("a", "b", "c");
const interval2 = interval(1000);
const result = source$.pipe(concat(letters)).pipe(concat(interval2));

result.subscribe((x) => console.log(x));