import { range } from 'rxjs';

const source$ = range(3, 6);

source$.subscribe(console.log, null, () => console.log('complete'));