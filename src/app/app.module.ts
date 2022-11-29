import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ReStockComponent } from './re-stock/re-stock.component';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtmDataContext } from './data-context';

@NgModule({
  declarations: [
    AppComponent,
    WithdrawComponent,
    ReStockComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AtmDataContext],
  bootstrap: [AppComponent]
})
export class AppModule { }
