import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = timer(1000);
const source2$ = timer(1000, 1000);

source$.pipe(map(() => 6)).subscribe(console.log);
source2$.subscribe(console.log);