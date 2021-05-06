import { Observable } from 'rxjs';

const onSubscribe = observer => {
    observer.next(1);
    observer.next(2);
    throw Error("opps");
    observer.next(3);
    observer.complete();
};

const source$ = new Observable(onSubscribe);
const observer = {
    next(iten) {
        console.log(iten);
    },
    error: console.error,
    complete() {
        console.log("complete");
    }
};


source$.subscribe(observer);