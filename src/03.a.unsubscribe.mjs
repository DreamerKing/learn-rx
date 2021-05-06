import { interval } from 'rxjs';

const source$ = interval(1000).subscribe(console.log);
setTimeout(() => source$.unsubscribe(), 3000);