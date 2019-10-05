import { of, interval } from 'rxjs';
import { repeatWhen  } from 'rxjs/operators';
const notifier = () => {
    return interval(2000);
}


const notifier2 = (notifications$) => {
    return notifications$.delay(2000);
}

const source$ = of(1, 2, 3);

const repeat$ = source$.pipe(repeatWhen(notifier));

//repeat$.subscribe(console.log);

const repeat2$ = source$.pipe(repeatWhen(notifier2));
repeat2$.subscribe(console.log);