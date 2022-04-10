import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { CalculateConfidenceComponent } from './calculate-confidence/calculate-confidence.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';

const routes: Routes = [
  { path: '', component: TransactionListComponent },
  { path: 'transactionList', component: TransactionListComponent },
  { path: 'addNewTransaction', component: AddTransactionComponent },
  { path: 'updateTransaction', component: UpdateTransactionComponent },
  { path: 'calculateConfidence', component: CalculateConfidenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
