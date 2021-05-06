import { Observable } from "rxjs";

const onSubscribe = (observer) => {
  let number = 1;
  const timer = setInterval(() => {
    console.log(`number: ${number}`);
    observer.next(number++);
  }, 1000);
  return {
    unsubscribe() {
      timer && clearInterval(timer);
    },
  };
};

const source$ = new Observable(onSubscribe).subscribe(console.log);
setTimeout(() => source$.unsubscribe(), 3500);
