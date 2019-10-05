import { Observable } from 'rxjs';
import { repeat } from 'rxjs/operators';
import { Repeat } from 'immutable';

let source$ = Observable.create(observer => {
    console.log("on subscribe");
    setTimeout(() => {
        observer.next(1);
    }, 1000);
    setTimeout(() => {
        observer.next(2);
    }, 2000);
    setTimeout(() => {
        observer.next(3);
    }, 3000);
   
    setTimeout(() => {
        observer.complete(); // 只有上游对象完结之后才会重新订阅
    }, 4000);

    return {
        unsubscribe: () => {
            console.log("unsubscribe");
        }
    }
    //new Observable(subscribe)
});

source$.pipe(repeat(3)).subscribe(console.log, null, ()=> console.log("complete"));