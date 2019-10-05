import { defer, of } from 'rxjs';

const oboservableFn = () => of(1, 3, 5);

const source$ = defer(oboservableFn);
source$.subscribe(console.log);