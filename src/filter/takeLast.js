import {of} from 'rxjs';
import { takeLast } from 'rxjs/operators';

of(12, 32, 21, 45, 23).pipe(takeLast(3)).subscribe(console.log);