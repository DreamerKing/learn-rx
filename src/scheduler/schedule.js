import { range, asyncScheduler, asapScheduler, queueScheduler } from "rxjs";
console.log("Before:");
asapScheduler.schedule(()=> console.log("asap"));
asyncScheduler.schedule(()=> console.log("async"));
queueScheduler.schedule(()=> console.log("queue"));
console.log("After:");

/* 
queue 同步执行
asap 事件循环 尽量使用微任务
async 事件循环 使用宏任务

支持Scheduler的操作符
1. 创建或组合类: 
  A: bindCallback, bindNodeCallback, empty, from, fromPromise, interval, of, range, throw, timer
  B: concat, merge
2. 应用Schedule: observeOn, subscribeOn
*/


