import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProuductsComponent } from './prouducts/prouducts.component';

const routes: Routes = [

  {
    path: '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component: HomeComponent
  },
  // localhost:4200/products/1/2

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
