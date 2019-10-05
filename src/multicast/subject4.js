import { interval, Subject } from "rxjs";
import { map, take, mapTo } from "rxjs/operators";

const subject = new Subject();
const tick1$ = interval(1000).pipe(mapTo('a'),take(2));
const tick2$ = interval(1000).pipe(mapTo('b'),take(2));

tick1$.subscribe(subject);
tick2$.subscribe(subject);

subject.subscribe(value => console.log("on data 1:", value));
// subject对象不能被重复使用，只要上游数据完结或出错都可以终止subject对象。
subject.subscribe(value => console.log("on data 2:", value));
