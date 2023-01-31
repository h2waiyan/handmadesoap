import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{

  constructor (private activatedRoute : ActivatedRoute){

  }

  productid : number = 0;

  productname : string = "";
  productprice : string = "";
  productingredients : string = "";

  products = [
    {
      name: "Daily Scrub",
      price : "2500 MMK",
      ingredients : "Salt, ......"
    },
    {
      name: "Lemon Soap",
      price : "3500 MMK",
      ingredients : "Salt, Lemon......"
    },
    {
      name: "Face Soap",
      price : "5500 MMK",
      ingredients : "Salt, ......"
    }
  ]

  ngOnInit(): void {
    let itemid = this.activatedRoute.snapshot.params['itemid']

    if(itemid == 1){
      this.productname = this.products[0].name;
      this.productprice = this.products[0].price;
      this.productingredients = this.products[0].ingredients;

    } else if (itemid == 2){
      this.productname = this.products[1].name;
      this.productprice = this.products[1].price;
      this.productingredients = this.products[1].ingredients;
    } 
    else if (itemid == 3){
      this.productname = this.products[2].name;
      this.productprice = this.products[2].price;
      this.productingredients = this.products[2].ingredients;
    } 

  }

}
