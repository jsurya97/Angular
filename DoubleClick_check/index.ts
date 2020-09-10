import { fromEvent } from 'rxjs';
import { scan, mapTo, debounceTime, buffer, map, filter, tap } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click');

const buff$=clicks$.pipe(debounceTime(250));

const doubleClick$=clicks$.pipe(
  buffer(buff$),
  map(x => x.length),
  tap(x => console.log(x)),
  filter(x => x==2)
)
doubleClick$.subscribe(x => console.log("count",x))
