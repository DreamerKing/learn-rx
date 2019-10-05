import { range, asyncScheduler, asapScheduler, queueScheduler } from "rxjs";

console.time("time");
const source$ = range(1, 10, asyncScheduler);
console.log("before:");
source$.subscribe(
    console.log,
    console.error,
    () => console.timeEnd("time")
);
console.log("after:");


/* 
1. asap
2. async
3. queue
4. animationFrame

js 单线程
调用栈
事件循环 任务队列 Micro Task Macro Task

*/