import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProuductsComponent } from './prouducts/prouducts.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path : 'signup',
    component: SignupComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  // localhost:4200/products/1/2
  {
    path : 'addproduct',
    component: AddproductComponent
  },
  {
    path : 'products',
    component : ProuductsComponent,
    // pathMatch: 'prefix',
    children : [
      {
        path: ':itemid',
        component : ProductdetailsComponent
      },
      {
        path: ':itemid/:chekoutid',
        component : CheckoutpageComponent
      },
    ]
  },
  {
    path: 'details',
    component: ProductdetailsComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  },
  {
    path : "**", // WildCard,
    // redirectTo : '' // 404 Page
    component : NotfoundpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
