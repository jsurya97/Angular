import { fromEvent, zip, range, timer, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, retryWhen, mergeMap, tap } from 'rxjs/operators';


const searchBox = document.getElementById('search-box');

const typeahead = fromEvent(searchBox, 'input').pipe(
  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
  filter(text => text.length > 2),//search element size should                                      //greater than 2
  debounceTime(500),              //to ingnore the immadiate api                                    call.wait for half second
  distinctUntilChanged(),        // when the input changed at the                                  time it will called ex jaya -> jay                                ->jaya ->not :jaya ->jay ->jayr                                   ->now changed

  switchMap(() => ajax('/api/endpoint').pipe(backoff(2,500))) // ignore the old data
);

typeahead.subscribe(data => {
 // Handle the data from the API
});


function backoff(maxTries, ms) {
 return pipe(
   retryWhen(attempts => zip(range(1, maxTries), attempts)
     .pipe(
       map(([i]) => i * i),
       tap(x => console.log(x)),
       mergeMap(i =>  timer(i * ms))
     )
   )
 );
}