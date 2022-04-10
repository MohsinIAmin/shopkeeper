import { Transaction } from "./Transaction";

let checker = (arr: string | any[], target: any[]) => target.every(v => arr.includes(v));

function countItem(transactions: Transaction[], items: Array<String>): number {
    let countItemTotal = 0;
    transactions.forEach(element => {
        if (checker(element.items, items)) countItemTotal += 1;
    });
    return countItemTotal;
}

export function confidenceCalculator(transactions: Transaction[], items1: Array<String>, items2: Array<String>): number {
    // console.log(checker(transactions[0].items, items1));
    console.log(countItem(transactions, items1));
    console.log(countItem(transactions, items2));
    let numerator = countItem(transactions, items2);
    let denominator = countItem(transactions, items1);
    console.log(numerator / denominator);
    if (denominator == 0) return 0;
    else return numerator/denominator;
    // console.log(transactions);
    // console.log(items1);
    // console.log(items2);

}