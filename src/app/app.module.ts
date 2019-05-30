import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { LogComponent } from './stock/log/log.component';
import { LoglistComponent } from './stock/loglist/loglist.component';
import { DetailsComponent } from './stock/details/details.component';
import { DetailslistComponent } from './stock/detailslist/detailslist.component';
import { StockService } from './service/stock.service';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    LogComponent,
    LoglistComponent,
    DetailsComponent,
    DetailslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
