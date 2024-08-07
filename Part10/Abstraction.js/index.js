function BankAccount(accountNumber, initBalance){
    let _balance= initBalance //private

    let _isAmountValid=function(amount){
        return typeof amount ==='number' && amount>0
    }

    this.deposit=function(amount){
        if(_isAmountValid(amount)){
            _balance=amount
            console.log(`Deposit success, new Balance is ${_balance}`);
        }else {
            console.log('Invalid amount');
        }
    }
    this.getBalance=function(){
        return _balance;
    }
}

let obj=new BankAccount('1234323',322)
obj.deposit(150);
console.log(obj.getBalance());