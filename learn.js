import * as Rx from 'rxjs';
import { map } from "rxjs/operators";

Rx.of(1, 2, 3).pipe(map(x => x*x)).subscribe(x => console.log(x));