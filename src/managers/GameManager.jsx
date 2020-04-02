import MoneyManager from "./MoneyManager.jsx";
import ResultManager from "./ResultManager.jsx";
import InputManager from "./InputManager.jsx";
import PlayerBet from "./PlayerBet.jsx";

class GameManager {
    constructor(balanceElement, resultElement, inputElement){
        this.moneyManager = new MoneyManager(balanceElement);
        this.resultManager = new ResultManager(resultElement);
        this.inputManager = new InputManager(inputElement);

        //this.setup();
    }
    setup(){
        this.inputManager.maxBetValue = this.moneyManager.money;
    }
    makeNewBet(color, amount){
        let bet = new PlayerBet(color, amount);
        this.moneyManager.money -= amount;
        let result = this.resultManager.getRoundResult(bet);
        console.log(result);
        if(result == "WIN"){
            let winAmount = amount * 2;
            if(color == "GREEN") winAmount *= 7;

            this.moneyManager.money += winAmount;
        }
    }
    onButtonClick(color){
        //alert(this.inputManager.value);
        this.makeNewBet(color, this.inputManager.value);
    }
};

export default GameManager;