import { empty } from 'rxjs';

const source$ = empty();
source$.subscribe(console.log, null, () => console.log('complete'));
