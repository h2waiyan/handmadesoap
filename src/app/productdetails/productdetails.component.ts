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
  productimg : string = "https://m.media-amazon.com/images/I/314DxpPLUDL._AC_SY780_.jpg";

  selected : boolean = false;


  products = [
    {
      id : 1,
      name: "Daily Scrub",
      price : "2500 MMK",
      ingredients : "Salt, ......"
    },
    {
      id : 2,
      name: "Lemon Soap",
      price : "3500 MMK",
      ingredients : "Salt, Lemon......"
    },
    {
      id : 3,
      name: "Face Soap",
      price : "5500 MMK",
      ingredients : "Salt, ......"
    }
  ]

  myTrackByFunc (index: number, product: any) : number {
    return product.id;
  }

  clear(){
    this.products = [];
  }

  addNewItem(){

    this.selected = true;
    this.products = [
      {
        id : 1,
        name: "Daily Scrub",
        price : "2500 MMK",
        ingredients : "Salt, ......"
      },
      {
        id : 2,
        name: "Lemon Soap",
        price : "3500 MMK",
        ingredients : "Salt, Lemon......"
      },
      {
        id : 3,
        name: "Face Soap",
        price : "5500 MMK",
        ingredients : "Salt, ......"
      },
      {
      id : 4,
      name: "Handmande Soap",
      price : "2500 MMK",
      ingredients : "Salt, Soap ......"
    }
    ]
    // this.products.push({
    //   id : 4,
    //   name: "Handmande Soap",
    //   price : "2500 MMK",
    //   ingredients : "Salt, Soap ......"
    // });
  }



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
