import { empty, interval } from 'rxjs'; 
import { isEmpty } from 'rxjs/operators';

const s$ = interval(1000).pipe(isEmpty());
s$.subscribe(console.log);

const e$ = empty().pipe(isEmpty());
e$.subscribe(console.log);