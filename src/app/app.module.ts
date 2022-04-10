import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CalculateConfidenceComponent } from './calculate-confidence/calculate-confidence.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent,
    UpdateTransactionComponent,
    TransactionListComponent,
    NavBarComponent,
    CalculateConfidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
