import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

of(12, 34, 35, 343, 12321, 2543, 65)
.pipe(skip(3))
.subscribe(console.log)