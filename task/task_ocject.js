function createAccount(accountHolder, accountNumber) {

    return {

        accountHolder: accountHolder,

        accountNumber: accountNumber,

        balance: 0,

        deposit: function (amount) {

            if (amount <= 0) {
                throw new Error("Deposit amount must be positive");
            }

            this.balance += amount;

            console.log(`Acount ${this.accountHolder} Deposit successful. New balance: $${this.balance}`);

            return this.balance;

        },

        withdraw: function (amount) {

            if (amount <= 0) {
                throw new Error("Withdrawal amount must be positive");
            }

            if (amount > this.balance) {
                throw new Error("Insufficient funds");
            }

            this.balance -= amount;

            console.log(`Account ${this.accountHolder} Withdrawal successful. New balance: $${this.balance}`);

            return this.balance;

        },

        getBalance: function () {

            return this.balance;

        },

    };

}

const account1 = createAccount("Davit Chilingaryan", "7712349987", 10000);

const account2 = createAccount("Anna Petrosyan", "7712349988", 5000);


function createBank() {

    return {

        accounts: [],

        addAccount: function (account) {

            if (account) {

                this.accounts.push(account);

            }

        },

        findAccount: function (accountNumber) {

            return this.accounts.find(account => account.accountNumber === accountNumber) || null;

        },

        getTotalBalance: function () {

            if (this.accounts.length === 0) {

                return 0;

            };

            const sum = 0;

            for (const account of this.accounts) {

                sum += account.getBalance();

            }

            return sum;

        }

    };

}


const ineco = createBank();

ineco.addAccount(account1);
ineco.addAccount(account2);

console.log(ineco);