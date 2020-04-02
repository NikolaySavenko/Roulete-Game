class ResultManager {
    constructor(resultElement){
        this.resultTable = resultElement;
    }
    getRoundResult(playerBet){
        let color = this.getRandomColor();
        let result = playerBet.color == color ? "WIN" : "LOSE";
        this.resultTable.setState({result: result});
        return result;
    }
    getRandomColor(){
        let rnd = this.getRandomNumber();
        if(rnd == 0){
            return "GREEN"
        }else if(rnd <= 18){
            return "BLACK"
        }else{
            return "RED"
        }
    }
    getRandomNumber(){
        return Math.floor(Math.random() * 37);
    }
};

export default ResultManager;