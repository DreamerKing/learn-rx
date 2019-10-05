import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = interval(500);

source$.pipe(map(x => x * x)).subscribe(console.log);