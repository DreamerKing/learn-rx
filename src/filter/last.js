import { of } from 'rxjs';
import { last } from 'rxjs/operators';

of(2, 4, 5, 12, 46, 51, 23).pipe(last(x => x % 2 !== 0)).subscribe(console.log);
of(2, 4).pipe(last(x => x % 2 !== 0, 0)).subscribe(console.log);