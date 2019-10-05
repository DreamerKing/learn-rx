import {of} from 'rxjs';
import { max } from 'rxjs/operators';
const s$ = of({ name: "King", age: 26},{ name: "Panpan", age: 20},{name: "Joy", age: 32});
const m$ = s$.pipe(max((a,b) => a.age - b.age));
m$.subscribe(console.log)
