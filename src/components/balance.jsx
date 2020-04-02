var React = require('react');

let style = {
    textAlign: "center"
};

class Balance extends React.Component {
    constructor(props){
        super(props);
        this.state = {balance: props.money || "null"};
    }
    render(){
        return <h1 style = {style}>Your Balance is: {this.state.balance}</h1>
    }
}
module.exports = Balance;