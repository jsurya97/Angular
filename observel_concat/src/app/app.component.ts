import { Component, VERSION } from "@angular/core";
import { interval, combineLatest, concat } from "rxjs";
import { map ,take} from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor() {
    const first = interval(1000).pipe(take(5) , map(x => x + 1));
    const second = interval(3000).pipe(take(5) , map(x => x + 200));
    const combine = concat(first, second);
    combine.subscribe(value => console.log(value));
  }
}
