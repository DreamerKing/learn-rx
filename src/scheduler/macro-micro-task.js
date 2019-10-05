setTimeout(() => {
    console.log("macro task");
}, 0);

process.nextTick(() => console.log("micro task"));

Promise.resolve(1).then((res)=> console.log("Promise: ", res));

// Promise 是否是微任务更js引擎有关