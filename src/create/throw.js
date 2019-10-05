import { throwError } from 'rxjs';

const source$ = throwError(new Error("oops!"));
source$.subscribe(console.log, console.error, () => console.log('complete'));
