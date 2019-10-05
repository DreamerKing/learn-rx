import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

// interval(500).pipe(skipWhile(x => x < 3)).subscribe(console.log);
interval(500).pipe(skipWhile(x => x % 2 === 0 )).subscribe(console.log);