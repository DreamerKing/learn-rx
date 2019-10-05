import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { format } from 'path';

const source$ = from([1, 2, 3]);
source$.subscribe(console.log, null, () => console.log('complete'));

function toObservable(){
    return from(arguments);
}

toObservable(2, 3, 4).subscribe(console.log);

function * generateNumber(max){
    for (let i = 0; i < max; i++) {
        yield i;
    }
}

const source2$ = from(generateNumber(6));
source2$.subscribe(console.log, null, () => console.log('complete2'));

//字符串
from("bsbsr").subscribe(console.log)

from(source$).pipe(map(x => x * x)).subscribe(console.log, null, () => console.log("from to from"));

const p = Promise.resolve('good');
const r = Promise.reject("oops");
from(p).subscribe(console.log);
from(r).subscribe(console.log, (error) => console.error("e:", error));


