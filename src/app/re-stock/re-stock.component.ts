import { Component, OnInit } from '@angular/core';
import { AtmDataContext } from '../data-context';
import { Denominations } from '../models/denominations.model';

@Component({
  selector: 'app-re-stock',
  templateUrl: './re-stock.component.html',
  styleUrls: ['./re-stock.component.css']
})
export class ReStockComponent implements OnInit {
  depositAmount: number = 0
  atmData: any
  denominations: Denominations[] = []
  depositSuccess: boolean = false
  constructor(private dataContext: AtmDataContext) { }

  ngOnInit(): void {
    this.atmData = this.dataContext.getAtmData();
    this.denominations = this.atmData.denominations
  }
  restock() {
    if (this.depositAmount == 100) {
      this.denominations[0].hundreds = this.denominations[0].hundreds + 1
    } else if (this.depositAmount == 50) {
      this.denominations[0].fiftys = this.denominations[0].fiftys + 1
    } else if (this.depositAmount == 20) {
      this.denominations[0].twentys = this.denominations[0].twentys + 1
    } else if (this.depositAmount == 10) {
      this.denominations[0].tens = this.denominations[0].tens + 1
    } else if (this.depositAmount == 5) {
      this.denominations[0].fives = this.denominations[0].fives + 1
    } else if (this.depositAmount == 1) {
      this.denominations[0].ones = this.denominations[0].ones + 1
    }
    this.denominations[0].total = this.denominations[0].total + this.depositAmount
    this.atmData.denominations = this.denominations
    this.dataContext.setAtmData(this.atmData)
    this.depositSuccess = true
  }
}
