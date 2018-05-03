import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemComponent } from './list-items/item/item.component';
import {MatCardModule} from '@angular/material/card';
import { ItemService } from './services/item.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { NavComponent } from './header/nav/nav.component';
import { CreditComponent } from './credit/credit.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { ContactComponent } from './contact/contact.component';
import { LenovoComponent } from './itemDescription/lenovo/lenovo.component';

const ROUTES = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListItemsComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'credit', component: CreditComponent},
  { path: 'warranty', component: WarrantyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'lenovo', component: LenovoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemsComponent,
    ItemComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    NavComponent,
    CreditComponent,
    WarrantyComponent,
    ContactComponent,
    LenovoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
