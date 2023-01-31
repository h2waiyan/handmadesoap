import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prouducts',
  templateUrl: './prouducts.component.html',
  styleUrls: ['./prouducts.component.css']
})
export class ProuductsComponent {

  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute
    
    ){

  }

  

  gotoDetails(itemid:number){
    // console.log("Got Clicked");
    // segments -> 
    // activated Route = localhost:4200/proudcts -> localhost:4200/proudcts/1
    this.router.navigate([itemid], {relativeTo : this.activatedRoute});
    // navigate to Product Details
  }

  // gotoDetailsURL(){
  //   console.log("Got Clicked");
  //   this.router.navigateByUrl('products/itemid');
  //   // navigate to Product Details
  // }

}
