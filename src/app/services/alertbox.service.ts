import { APP_ID, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertboxService {

  constructor() { }

  sayHello(){
    alert("Hello, this is an alert from Service.");
  }

  printfun(){
    console.log("This is a println test.");
  }

  getCard(){
    // api call - cart product list
  }
}
