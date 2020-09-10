import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class AppService{
  sub : Subject<number>;

  constructor(){
    this.sub=new Subject<number>();
  }

  sendData(data:number){
    this.sub.next(data)
  }
}