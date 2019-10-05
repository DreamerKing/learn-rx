import { generate } from 'rxjs';

const source$ = generate(
    2, // 初值
    value => value < 10, // 条件
    value => value + 2, // 自变
    value => value * value //结果
    );

source$.subscribe(console.log);

// 使用generate实现range
const range = (start, count) => generate(
    start,
    value => value < start + count,
    value => value + 1,
    value => value
);

const source2$ = range(12, 3);
console.log("range");

source2$.subscribe(console.log);