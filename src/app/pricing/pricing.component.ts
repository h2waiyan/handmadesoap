import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  myname!: string;

  genders = ['Male', 'Female', 'Prefered not to say'];

  // loginform = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, Validators.required),
  //   gender : new FormControl('')
  // })

  // Nested Form Group
  // loginform = new FormGroup({
  //   userdata : new FormGroup({
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     password: new FormControl(null, Validators.required),
  //   }),
  //   gender : new FormControl('')
  // })

  // Form Array
  loginform = new FormGroup({
    userdata : new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    }),
    gender : new FormControl(''),
    hobby: new FormArray([]),
    url : new FormControl('', [Validators.required, this.ValidateUrl])
  })

  login(){
    console.log('-----Submitted------');
    console.log(this.loginform);
    console.log(this.loginform.value);
  }

  addHobby(){
    const fCtrl = new FormControl(null, Validators.required);
    (<FormArray>this.loginform.get('hobby')).push(fCtrl)
  }

  getHobbyControls(){
    return (<FormArray>this.loginform.get('hobby')).controls;
  }

  // URL validation (CUSTOM)
  ValidateUrl (control: FormControl){
    if (!control.value.startsWith('https')) {
      return { invalidURL : true}
    } 
    return null;
  }
}
