import { timer, of } from 'rxjs';
import { startWith, concat, map } from 'rxjs/operators';

const s$ = timer(0, 1000);

// const r$ = s$.pipe(startWith('start'));

//const r$ = of('Start').pipe(concat(s$));

const r$ = s$.pipe(map(x => x * 2)).pipe(startWith('start')).pipe(map(x => x + 'ok'));

r$.subscribe(
    console.log,
    null,
    () => console.log("complete")
); 