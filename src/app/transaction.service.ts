import { Injectable } from '@angular/core';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }
  transactions: Transaction[] = [];

  getTransaction(): Transaction[] {
    return this.transactions;
  }

  addTransaction(givenTransaction: Transaction): void {
    this.transactions.push(givenTransaction);
  }

  deleteTransaction(i: number): void {
    this.transactions.splice(i, 1);
  }

  transactionToBeUpdate = new Transaction();
  transactionToBeUpdateIndex: number = 0;

  setTransactionToBeUpdated(transactionGiven: Transaction, index: number): void {
    this.transactionToBeUpdate = transactionGiven;
    this.transactionToBeUpdateIndex = index;
  }

  getTransactionToBeUpdated(): Transaction {
    return this.transactionToBeUpdate;
  }

  updateTransaction(transactionGiven: Transaction): void {
    this.transactions.splice(this.transactionToBeUpdateIndex, 1, transactionGiven);
  }
}
