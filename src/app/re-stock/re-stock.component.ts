import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public restockForm: FormGroup;

  constructor(private dataContext: AtmDataContext) { }

  ngOnInit(): void {
    this.atmData = this.dataContext.getAtmData();
    this.denominations = this.atmData.denominations
    this.restockForm = new FormGroup({
      hundreds: new FormControl(0, Validators.min(0)),
      fiftys: new FormControl(0, Validators.min(0)),
      twentys: new FormControl(0, Validators.min(0)),
      tens: new FormControl(0, Validators.min(0)),
      fives: new FormControl(0, Validators.min(0)),
      ones: new FormControl(0, Validators.min(0))
    });
  }

  restock() {
    const denoms = ['hundreds', 'fiftys', 'twentys', 'tens', 'fives', 'ones']
    denoms.forEach((denom) => {
      let dAmount = parseInt(this.restockForm.controls[denom].value)
      if (denom == 'hundreds') {
        this.denominations[0].hundreds += dAmount
        this.depositAmount += dAmount * 100
      } else if (denom == 'fiftys') {
        this.denominations[0].fiftys += dAmount
        this.depositAmount += dAmount * 50
      } else if (denom == 'twentys') {
        this.denominations[0].twentys += dAmount
        this.depositAmount += dAmount * 20
      } else if (denom == 'tens') {
        this.denominations[0].tens += dAmount
        this.depositAmount += dAmount * 10
      } else if (denom == 'fives') {
        this.denominations[0].fives += dAmount
        this.depositAmount += dAmount * 5
      } else if (denom == 'ones') {
        this.denominations[0].ones += dAmount
        this.depositAmount += dAmount * 1
      }
    })
    this.denominations[0].total = this.denominations[0].total + this.depositAmount
    this.atmData.denominations = this.denominations
    this.dataContext.setAtmData(this.atmData)
    this.depositSuccess = true
  }
}
