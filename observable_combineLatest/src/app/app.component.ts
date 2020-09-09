import { Component, VERSION } from '@angular/core';
import { interval, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(){
  const first = interval(1000).pipe(map(x =>x+1));
  const second = interval(3000).pipe(map(x =>x+1));
  const combine=combineLatest(first,second);
  combine.subscribe(value => console.log(value));
  
  }
}
