import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../Transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
  }

  transactions = this.transactionService.getTransaction();

  deleteTransaction(transaction: Transaction, i: number): void {
    this.transactionService.deleteTransaction(i);
  }

  updateTransaction(transaction: Transaction, i: number): void {
    this.transactionService.setTransactionToBeUpdated(transaction, i);
    this.router.navigate(['updateTransaction']);
  }

}
