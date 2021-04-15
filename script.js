var budgetsAmt = function() {
    var overbudgets = document.getElementsByClassName('overbudget');

    let nextIsNegative = false;
    let amtInBudgets = 0;

    for(i=0;i<overbudgets.length;i++) {
        let overbudgetString = overbudgets[i].innerHTML.toString().substring(1);
        console.log("overbudgetstring: " + overbudgetString);
        let overbudgetNumber = accounting.unformat(overbudgetString);
        console.log("overbudgetNumber: " + overbudgetNumber)
        if (!overbudgetNumber) {
            nextIsNegative = true;
        }
        else {
            if (nextIsNegative) {
                overbudgetNumber = overbudgetNumber*(-1);
                nextIsNegative = false;
            }
            if (i !== 0) {
                amtInBudgets = amtInBudgets + overbudgetInt;
                console.log(amtInBudgets);
            }
        }
    }
    return amtInBudgets;
}

var cashAccountAmount = function() {
    let cashSection = document.getElementsByClassName('accounts-data-li');
    let regexToMatchCashAccount = new RegExp("TOTAL CHECKING");
    let regexToMatchCashAmount = new RegExp("(?<=title=\"balance\">[$])[\\d,.]+")
    let cashAmount;
    for(i=0;i<cashSection.length;i++) {
        cashSectionString = cashSection[i].innerHTML.toString();
        if(regexToMatchCashAccount.test(cashSectionString)) {
            cashAmount = regexToMatchCashAmount.exec(cashSectionString)[0];
            console.log(cashAmount);
            return cashAmount;
        }
    }
}

console.log("Amount in Budgets: $" + budgetsAmt());
console.log("Amount in Cash Account: $" + cashAccountAmount());