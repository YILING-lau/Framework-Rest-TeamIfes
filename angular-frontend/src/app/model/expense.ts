export class ExpenseModel {
    id: number;
    categoryColor: string;
    categoryLabel: string;
    date: Date;
    amount: number;

    constructor(id: number, categoryColor: string, categoryLabel:string, date: Date, amount:number) {
        this.id = id;
        this.categoryColor = categoryColor;
        this.categoryLabel = categoryLabel;
        this.date = date;
        this.amount = amount;
    }

    getAmount(): number {
        return this.amount;
    }
 }