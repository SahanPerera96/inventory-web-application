import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controller/home/home.component';
import { StockComponent } from './stock/stock.component';
import { StockmainComponent } from './controller/stockmain/stockmain.component';
import { DraftapproveComponent } from './controller/draftapprove/draftapprove.component';
import { ReportmainComponent } from './controller/report/reportmain/reportmain.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stockmain', component: StockmainComponent},
  {path: 'reportmain', component: ReportmainComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
