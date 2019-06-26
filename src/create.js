import * as RX from "rxjs";

const observable = RX.Observable.create( observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.compute();
});

observable.subscribe( 
    v => console.log(v),
    err => {},
    ()=> console.log("compete")
);

// 抛出异常的情形
const observable2 = RX.Observable.create( observer => {
    observer.error("Something wrong ...");
});

observable2.subscribe(
    v => console.log(v),
    err => console.error(err),
    () => console.log("compete")  
);

const observable3 = RX.Observable.create( observer => {
    const id = setTimeout(() => {
        observer.next("... observer3 ...");
    }, 1000);
    return () => {
        console.log("id");
        clearTimeout(id);
    }
});

const subscription = observable3.subscribe(v => console.log(v));
setTimeout(() => {
    console.log("unsubscribe");
    subscription.unsubscribe();
}, 3000);