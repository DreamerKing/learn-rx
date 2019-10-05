import { empty } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

const s$ = empty();
s$.pipe(defaultIfEmpty("is empty")).subscribe(console.log);