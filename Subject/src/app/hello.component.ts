import { Component, Input } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click)= "emit()">emit</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
    constructor(public appService:AppService){
    this.appService.sub.subscribe(x => console.log("hellow",x))
  }
  emit(){
    this.appService.sendData(Math.random())
  }
}
