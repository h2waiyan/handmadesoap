import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') singupForm! : NgForm;
  // @ViewChild(ProductdetailsComponent) pdetails : any;

  username!: string;
  email!: string;
  secretques!: string;

  userData = {
    "username" : "",
    "email" : "",
    "secretques" : "",
  }

  ngOnInit(){
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    // console.log(this.username, this.email, this.secretques);
    console.log(this.singupForm);
    console.log(this.singupForm.value.userData.username);
    console.log(this.singupForm.value.userData.email);
    
  }
}
