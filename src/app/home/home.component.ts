import { Component, OnInit } from '@angular/core';
import { AlertboxService } from '../services/alertbox.service';
import { AllinoneService } from '../services/allinone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (
    private alertbox : AlertboxService,
    private allinone : AllinoneService
    
    ) {

  }

  selectedList = "";

  myFun(event : any){
    // console.log("This is from child com");
    this.selectedList = event;
    
    // alert("this is because of event from child com.");
  }

  ngOnInit(): void {
    console.log("Hi");
    // this.alertbox.sayHello();

    // this.alertbox.printfun();

    // this.allinone.getDataFromAPI();
  }

}
