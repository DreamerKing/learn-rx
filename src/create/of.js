import { of } from 'rxjs';

const source$ = of(2, 4, 5, 7, 11);

source$.subscribe(console.log, null, ()=> console.log('complete'));