import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtmDataContext } from '../data-context';
import { Denominations } from '../models/denominations.model';
import { Transactions } from '../models/transactions.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  public desiredAmount: any
  atmData: any
  withdrawSuccess: boolean = false
  withdrawError: boolean = false
  denominations: Denominations[] = []
  transactions: Transactions[] = []
  constructor(private dataContext: AtmDataContext, private router: Router) { }

  ngOnInit(): void {
    this.atmData = this.dataContext.getAtmData();
    this.denominations = this.atmData.denominations
    this.transactions = this.atmData.transactions
  }

  withdraw() {
    this.desiredAmount = parseInt(this.desiredAmount)
    if (this.desiredAmount <= this.atmData.denominations[0].total) {
      this.withdrawSuccess = true
      this.withdrawError = false

      this.deductAmount()

    } else {
      this.withdrawSuccess = false
      this.withdrawError = true
      const transData: Transactions = {
        date: new Date(),
        amount: this.desiredAmount,
        status: 'Failure'
      }
      this.atmData.transactions = this.transactions
      this.dataContext.setAtmData(this.atmData)
    }
  }
  deductAmount() {
    // if (this.desiredAmount == 100) {
    //   this.denominations[0].hundreds = this.denominations[0].hundreds - 1
    // } else if (this.desiredAmount == 50) {
    //   this.denominations[0].fiftys = this.denominations[0].fiftys - 1
    // } else if (this.desiredAmount == 20) {
    //   this.denominations[0].twentys = this.denominations[0].twentys - 1
    // } else if (this.desiredAmount == 10) {
    //   this.denominations[0].tens = this.denominations[0].tens - 1
    // } else if (this.desiredAmount == 5) {
    //   this.denominations[0].fives = this.denominations[0].fives - 1
    // } else if (this.desiredAmount == 1) {
    //   this.denominations[0].ones = this.denominations[0].ones - 1
    // }
    // const transData: Transactions = {
    //   date: new Date(),
    //   amount: this.desiredAmount,
    //   status: 'Success'
    // }
    // this.transactions.push(transData)
    // this.atmData.transactions = this.transactions
    // this.denominations[0].total = this.denominations[0].total - this.desiredAmount
    // this.atmData.denominations = this.denominations
    // this.dataContext.setAtmData(this.atmData)
    let amountDeducted = this.desiredAmount
    var hundreadsUsed = Math.floor(amountDeducted / 100);
    if (hundreadsUsed > this.denominations[0].hundreds) {
      hundreadsUsed = this.denominations[0].hundreds;
    }
    amountDeducted -= hundreadsUsed * 100;

    var fiftiesUsed = Math.floor(amountDeducted / 50);
    if (fiftiesUsed > this.denominations[0].fiftys) {
      fiftiesUsed = this.denominations[0].fiftys;
    }
    amountDeducted -= fiftiesUsed * 50;

    var twentiesUsed = Math.floor(amountDeducted / 20);
    if (twentiesUsed > this.denominations[0].twentys) {
      twentiesUsed = this.denominations[0].twentys;
    }
    amountDeducted -= twentiesUsed * 20;

    var tensUsed = Math.floor(amountDeducted / 10);
    if (tensUsed > this.denominations[0].tens) {
      tensUsed = this.denominations[0].tens;
    }
    amountDeducted -= tensUsed * 10;

    var fivesUsed = Math.floor(amountDeducted / 5);
    if (fivesUsed > this.denominations[0].fives) {
      fivesUsed = this.denominations[0].fives;
    }
    amountDeducted -= fivesUsed * 5;

    var onesUsed = Math.floor(amountDeducted / 1);
    if (onesUsed > this.denominations[0].ones) {
      onesUsed = this.denominations[0].ones;
    }
    amountDeducted -= onesUsed * 1;

    if (amountDeducted === 0) {
      this.denominations[0].hundreds -= hundreadsUsed;
      this.denominations[0].fiftys -= fiftiesUsed;
      this.denominations[0].twentys -= twentiesUsed;
      this.denominations[0].tens -= tensUsed;
      this.denominations[0].fives -= fivesUsed;
      this.denominations[0].ones -= onesUsed;
    }
    const transData: Transactions = {
      date: new Date(),
      amount: this.desiredAmount,
      status: 'Success'
    }
    this.transactions.push(transData)
    this.atmData.transactions = this.transactions
    this.denominations[0].total = this.denominations[0].total - this.desiredAmount
    this.atmData.denominations = this.denominations
    this.dataContext.setAtmData(this.atmData)
  }
}
