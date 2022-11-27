import { Injectable } from "@angular/core";
import { Denominations } from "./models/denominations.model";
import { Transactions } from "./models/transactions.model";

@Injectable()
export class AtmDataContext {
    atmData = {
        denominations: [new Denominations()],
        transactions: [new Transactions()],
    }
    setDenominations(denominations: Denominations[]) {
        this.atmData.denominations = denominations
    }
    getDenominations() {
        return this.atmData.denominations
    }
    setTransactions(transactions: Transactions[]) {
        this.atmData.transactions = transactions
    }
    getTransactions() {
        return this.atmData.transactions
    }
    getAtmData() {
        return this.atmData
    }
    setAtmData(atmData: any) {
        this.atmData = atmData
    }
}