import {of, empty} from 'rxjs';
import { first } from 'rxjs/operators';

of(2, 4, 5, 12, 46).pipe(first(x => x%2 !== 0)).subscribe(console.log);
empty().pipe(first(null,0)).subscribe(console.log);