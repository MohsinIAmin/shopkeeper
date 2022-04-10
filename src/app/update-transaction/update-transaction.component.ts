import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
  }

  givenTransaction = this.transactionService.getTransactionToBeUpdated();
  givenItemsString = this.givenTransaction.items.toString();

  updateTransaction(): void {
    this.givenTransaction.items = this.givenItemsString.split(',');
    this.transactionService.updateTransaction(this.givenTransaction);
    this.router.navigate(['transactionList']);
  }
}
