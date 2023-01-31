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

  ngOnInit(): void {
    console.log("Hi");
    // this.alertbox.sayHello();

    // this.alertbox.printfun();

    // this.allinone.getDataFromAPI();
  }

}
