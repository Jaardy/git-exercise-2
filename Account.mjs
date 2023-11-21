export default class Account {
    static #balance = 100
    static #accountTransactions = []
    #personalTransactions = []

    static getAccountTransactions () {
        return Account.#accountTransactions
    }

    constructor(name) {
        this.name = name
        
    }
    #logTransaction(transactionDetails) {
        Account.#accountTransactions.push(transactionDetails)
        this.#personalTransactions.push(transactionDetails)
    }
    purchase(price) {
        if ( Account.#balance  - price< 0) {
            throw new Error ('Insufficient funds.')
            return "Insufficient funds."
        }
        Account.#balance -= price
        this.#logTransaction({name: this.name, itemCost: price, newAccountBalance: Account.#balance})
        console.log("Account Transactions: ", Account.#accountTransactions)
        return "Approved"
    }
    getPersonalTransactions
}


const account = new Account("Jordan")


