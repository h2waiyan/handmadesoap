import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  employeeForm!: FormGroup;

  //template-driven form 
  product_name: string = "Add a product name..."; // this product name can be undefined

  addFun() {

    alert(this.product_name);
  }

  ngOnInit() {
     this.employeeForm = new FormGroup(
      {
        username: new FormControl(''),
        password: new FormControl('')
      }
    )
  }

  //reactive form


  addEmployee() {

    // this.username.setValue("0987654321");
    this.employeeForm.setValue(
      {
        username : "HWY",
        password : "password"
      }
    );

    this.employeeForm.patchValue({
      username : "TESTING"
    })

    console.log(this.employeeForm.value);
    // alert(`${this.username.value} ${this.password.value}`);
  }
}
