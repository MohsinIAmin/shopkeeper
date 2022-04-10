import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../Transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
  }

  newTransaction = new Transaction();
  transactionString: string = '';

  addTransaction(): void {
    this.newTransaction.items = this.transactionString.split(',');
    this.transactionService.addTransaction(this.newTransaction);
    this.router.navigate(['transactionList']);
  }
}
