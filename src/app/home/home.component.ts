import { Component, OnInit, ViewChild } from '@angular/core';
import { ProuductsComponent } from '../prouducts/prouducts.component';
import { AlertboxService } from '../services/alertbox.service';
import { AllinoneService } from '../services/allinone.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ProuductsComponent) productCom : any;

  constructor (
    private alertbox : AlertboxService,
    private allinone : AllinoneService
    
    ) {

  }

  color : ThemePalette = 'warn';
  checked = true;
  disabled = false;

  faCoffee = faCoffee;

  selectedList = "";

  mylist: string [] = [];

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

  viewC(){
    // alert(this.productCom.ref_id);
    this.mylist = [
      "Item ONe",
      "Item Two"
    ]
  }

}
