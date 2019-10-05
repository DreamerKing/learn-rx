import { interval, forkJoin, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

// forkJoin 将所有Observable对象的最后一个数据进行合并
const s1$ = interval(1000).pipe(map(x => x + 'a')).pipe(take(2));
const s2$ = interval(2000).pipe(map(x => x + 'b')).pipe(take(3));
// const s3$ = interval(500).pipe(map(x => x + 'b'));
const s3$ = of(6);
const s$ = forkJoin(s1$, s2$, s3$);

s$.subscribe(
    console.log,
    null,
    () => console.log("complete")
)
