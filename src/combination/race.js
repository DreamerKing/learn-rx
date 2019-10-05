import { timer, race } from 'rxjs';
import { map} from 'rxjs/operators';

const s1$ = timer(500, 2000).pipe(map(x => `${x}A`));
const s2$ = timer(500, 1000).pipe(map(x => `${x}B`));
const w$ = race(s1$, s2$);
w$.subscribe(
    console.log,
    null,
    () => console.log("complte")  
)
