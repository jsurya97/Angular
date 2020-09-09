import { Component, VERSION } from "@angular/core";
import { of,zip } from "rxjs";
import { map ,take} from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor() {
   let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);
 
zip(age$, name$, isDev$).pipe(
  map(([age, name, isDev]) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));
  }
}
