import { Observerable } from 'rxjs';
import { map } from 'rxjs/operators';

const onSubscribe = observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
};

const source$ = Observerable.create(onSubscribe);
source$.pipe(map(x => x * x)).subscribe(console.log);