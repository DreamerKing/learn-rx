import { of } from 'rxjs';
import { map } from 'rxjs/operators';

let source$ = of(1, 2, 3).pipe(map(x => x + '!!!'));
source$.subscribe(
    console.log,
    null,
    () => console.log("complete.")
);