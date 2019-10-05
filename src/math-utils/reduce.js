import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const s$ = of(3, 56, 32, 2).pipe(reduce((pre, cur) => pre + cur));
s$.subscribe(console.log)