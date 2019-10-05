import { repeat }  from 'rxjs/operators';
import { of } from 'rxjs';

const source$ = of(1, 2, 3);
const repeat$ = source$.pipe(repeat(3)); // 如果repeat传参是负数则表示无限订阅
repeat$.subscribe(console.log, null, () => console.log('complete'));


