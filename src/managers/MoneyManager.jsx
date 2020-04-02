let defaultBalance = 1000;

class MoneyManager {
    constructor(balance){
        this.balance = balance;
        this.money = localStorage.getItem("money") || defaultBalance;
    }
    set money(value){
        this.moneyAmount = value;
        this.balance.setState({balance: value});
        this.save();
    }
    get money(){
        return this.moneyAmount;
    }
    save(){
        localStorage.setItem("money", this.money.toString());
    }
};

export default MoneyManager;