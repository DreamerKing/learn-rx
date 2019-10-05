import { map } from 'rxjs/operators';
import {of} from 'rxjs';

const s$ = of(1, 2, 3);
const mapFn = function(value, index){
    return `${value} ${this.separator} ${index}`;
};

const context = { separator: ":"};

const r$ = s$.pipe(map(mapFn, context)).subscribe(
    console.log,
    null,
    () => console.log("complete")
);

const mapFn2 = (function (separator){
   return function(value, index){
       return `${value} ${separator} ${index}`; 
   } 
})(context.separator);

const r2$ = s$.pipe(map(mapFn2)).subscribe(
    console.log,
    null,
    () => console.log("complete2")
);