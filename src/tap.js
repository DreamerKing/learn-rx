import { fromEvent, range } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

/* const clicks = fromEvent(document, 'click');
const positions = clickd.pipe(
    tap(ev => console.log(ev)),
    map( ev => ev.clientX)
);
positions.subscribe(x => console.log(x)) */

const origin = range(1, 10)
.pipe(
    filter(x => x%2 === 0),
    tap(x => console.log("tap", x)),
    map(x => x*x)
);

origin.subscribe(x => console.log(x))
