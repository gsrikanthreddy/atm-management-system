import { Component, OnInit } from '@angular/core';
import { AtmDataContext } from '../data-context';
import { Denominations } from '../models/denominations.model';
import { Transactions } from '../models/transactions.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  denominations: Denominations[] = []
  atmData: any
  transactions: Transactions[] = []
  constructor(private dataContext: AtmDataContext) { }

  ngOnInit(): void {
    this.atmData = this.dataContext.getAtmData();
    console.log(this.atmData)
    if (this.atmData.denominations[0].loadBal) {
      this.inilializeDenom()
    }
    this.denominations = this.atmData.denominations
    this.transactions = this.atmData.transactions
  }
  inilializeDenom() {
    this.denominations.push({ hundreds: 10, tens: 10, twentys: 10, fiftys: 10, fives: 10, ones: 10, total: 1860, loadBal: false })
    this.atmData.denominations = this.denominations
    this.dataContext.setAtmData(this.atmData)
  }
}
