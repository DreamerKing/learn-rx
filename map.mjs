import { Observable } from "rxjs";

function map(project){
    return new Observable(subscrber => {
        const sub = subscrber.subscribe({
            next: value => {
                try {
                    subscrber.next(project(value));
                } catch (error) {
                    subscrber.error(error);
                }
               
            },
            error: err => subscrber.error(error),
            complete: () => subscrber.complete()
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