import { interval } from "rxjs";
import { share, take } from "rxjs/operators";

const tick$ = interval(1000).pipe(take(10))
const shareTick$ = tick$.pipe(share());

shareTick$.subscribe(value => console.log("ob1:", value));
setTimeout(() => {
    shareTick$.subscribe(value => console.log("ob2:", value));  
}, 5000)

