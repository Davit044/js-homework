function Account(accountHolder, accountNumber) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = 0;

    this.deposit = function (amount) {

        if (amount > 0) {

            this.balance += amount;

            return `Deposit successful. New balance: $${this.balance}`;

        } else {

            return "Deposit amount must be positive.";

        }

    };

    this.withdraw = function (amount) {

        if (amount > 0 && amount <= this.balance) {

            this.balance -= amount;

            return `Withdrawal successful. New balance: $${this.balance}`;

        } else if (amount > this.balance) {

            return "Insufficient funds.";

        } else {

            return "Withdrawal amount must be positive.";

        }

    };

    this.getBalance = function () {

        return `Current balance: $${this.balance}`;

    };

}

const account1 = new Account("Davit Chilingaryan", "7712349987");


function createBank(account) {

    this.accounts = [];

    this.addAccount = function (account) {

        if (account) {

            this.accounts.push(account);

            return `Account for ${account.accountHolder} added successfully.`;

        }

    }

    this.getAccount = function (accountNumber) {

        for (let i = 0; i < this.accounts.length; ++i) {

            if (this.accounts[i].accountNumber === accountNumber) {
                return this.accounts[i];
            }

        };

        return null;

    };

    this.getTotalBalance = function () {

        if (this.accounts.length === 0) {
            return "No accounts available.";
        }

        let totalBalance = 0;

        for (let i = 0; i < this.accounts.length; ++i) {
            totalBalance += this.accounts[i].balance;
        }

        return `Total balance of all accounts: $${totalBalance}`;

    };


}