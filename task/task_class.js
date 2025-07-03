class Account {

    #accountHolder;
    #accountNumber;
    #balance = 0;

    constructor(accountHolder, accountNumber) {

        this.#accountHolder = accountHolder;
        this.#accountNumber = accountNumber;

    }

    deposit(amount) {

        if (amount > 0) {

            this.#balance += amount;

            return `Deposit successful. New balance: $${this.#balance}`;

        } else {

            return "Deposit amount must be positive.";

        }

    }

    withdraw(amount) {

        if (amount > 0 && amount <= this.#balance) {

            this.#balance -= amount;

            return `Withdrawal successful. New balance: $${this.#balance}`;

        } else if (amount > this.#balance) {

            return "Insufficient funds.";

        } else {

            return "Withdrawal amount must be positive.";

        }

    }

    getBalance() {

        return `Current balance: $${this.#balance}`;

    }

}

const account1 = new Account("Davit Chilingaryan", "7712349987");

class Bank {

    #accounts = [];

    addNewAccount(Account) {

        if (Account) {
            this.#accounts.push(Account);
            console.log(`Account for ${Account.accountHolder} added successfully.`);
        }

    };

    getAccount(accountNumber) {

        return this.#accounts.find(account => account.accountNumber === accountNumber) || null;

    };


    getTotalBalance() {

        return this.#accounts.reduce((total, account) => total + account.balance, 0);

    };

}

