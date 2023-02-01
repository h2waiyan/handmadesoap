import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProuductsComponent } from './prouducts/prouducts.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProuductsComponent,
    PricingComponent,
    ProductdetailsComponent,
    NotfoundpageComponent,
    CheckoutpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
