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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './controller/home/home.component';
import { StockmainComponent } from './controller/stockmain/stockmain.component';
import { DraftComponent } from './controller/draft/draft.component';
import { DraftapproveComponent } from './controller/draftapprove/draftapprove.component';
import { OpenstockComponent } from './controller/openstock/openstock.component';
import { ReportmainComponent } from './controller/report/reportmain/reportmain.component';
import { StockmovementComponent } from './controller/report/stockmovement/stockmovement.component';
import { StockasatComponent } from './controller/report/stockasat/stockasat.component';
import { OndemandComponent } from './controller/report/ondemand/ondemand.component';
import { CriticalstockComponent } from './controller/report/criticalstock/criticalstock.component';
import { ConsumerinvoiceComponent } from './controller/report/consumerinvoice/consumerinvoice.component';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    LogComponent,
    LoglistComponent,
    DetailsComponent,
    DetailslistComponent,
    HomeComponent,
    StockmainComponent,
    DraftComponent,
    DraftapproveComponent,
    OpenstockComponent,
    ReportmainComponent,
    StockmovementComponent,
    StockasatComponent,
    OndemandComponent,
    CriticalstockComponent,
    ConsumerinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
