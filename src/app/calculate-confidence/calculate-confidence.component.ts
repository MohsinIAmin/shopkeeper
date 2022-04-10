import { Component, OnInit } from '@angular/core';
import { confidenceCalculator } from '../ConfidenceCalculator';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-calculate-confidence',
  templateUrl: './calculate-confidence.component.html',
  styleUrls: ['./calculate-confidence.component.css']
})
export class CalculateConfidenceComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  item1String: String = '';
  item2String: String = '';
  confidence: number = 0;

  calculateConfidence(): void {
    this.transactionService.getTransaction();
    this.item1String.split(',');
    this.item2String.split(',');
    this.confidence = confidenceCalculator(this.transactionService.getTransaction(), this.item1String.split(','), this.item2String.split(','));
  }

}
