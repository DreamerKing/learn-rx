import { Observable } from 'rxjs';

const onSubscribe = observer => {
    let number = 1;
    const timer = setInterval(() => {
        observer.next(number++);
        if (number == 2) {
            observer.error("opps!");
        }
        if (number > 3) {
            timer && clearInterval(timer);
            console.log(`number: ${number}`);
            observer.complete();
        }
    }, 1000);
};

new Observable(onSubscribe).subscribe(
    console.log,
    console.error,
    () => {
        console.log('complete');
    }
);

// 完结 complete()
// 错误 error()

// observable处于完结状态之后再调用next()或complete()没用。