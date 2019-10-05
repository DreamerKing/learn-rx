import { Observable } from "rxjs";

function map(project){
    return new Observable(observer => {
        const sub = this.subscribe({
            next: value => {
                try {
                    observer.next(project(value));
                } catch (error) {
                    observer.error(error);
                }
               
            },
            error: err => observer.error(error),
            complete: () => observer.complete()
        });
        return {
            unsubscribe: () => {
                sub.unsubscribe();
            }
        }
    })
}

const t = [23, 45, 21, 65];
const m = map((t) => x*2);
m.subscribe(console.log);