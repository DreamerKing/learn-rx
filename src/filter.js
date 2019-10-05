import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
const source$ = of(...[23, 45, 22, 86, 40]).pipe(filter(item => item % 2 == 0));
source$.subscribe(console.log)