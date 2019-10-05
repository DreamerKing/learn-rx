import { timer, of, combineLatest } from 'rxjs';
const a$ = of(1, 2, 3);
const a2$ = of("a", "b", "c");
const a3$ = of("x", "y");
const s1$ = timer(500, 1000);
const s2$ = timer(1000, 1000);
const s$ = combineLatest(s1$, s2$);
// s$.subscribe(console.log)

// const sa$ = combineLatest(s1$, s2$, a$);
// sa$.subscribe(console.log)
const project = (...s) => s.join('');
const a123$ = combineLatest(a$, a2$, a3$, project); // 定制输出
a123$.subscribe(console.log)

