import { Observable, create, interval, merge, Subject, of} from "rxjs";
import { map, take, multicast, delay, tap } from "rxjs/operators";

const subject = new Subject();

const tick$ = interval(1000).pipe(take(10)).pipe(tap( x => console.log('source', x));

const tick = tick$;
const delayTick = tick.pipe(delay(500));
const mergeTick = delayTick.pipe(merge(tick))

mergeTick.subscribe(value => console.log('ob:', value));
