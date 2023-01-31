import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProuductsComponent } from './prouducts/prouducts.component';

const routes: Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'products',
    component : ProuductsComponent,
    children : [
      {
        path: ':itemid',
        component : ProductdetailsComponent
      }
    ]
  },
  {
    path: 'details',
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
