import { of } from 'rxjs';
import { pluck } from 'rxjs/operators';

const s$ = of({name: "react", version: "16.8.9"},{ name: "rxjs", version:"3.2.0" }, { name: "vue", version: "3.6.0"}, { name: "immutable"});
const r$ = s$.pipe(pluck("version")).subscribe(console.log);