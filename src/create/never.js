import { never } from 'rxjs';

const source$ = never();
source$.subscribe(console.log, null, () => console.log('complete'));
