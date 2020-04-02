var React = require('react');

let style = {
    fontSize: "16px",
    padding: "12px",
    height: "29px",
    width: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
};

class GameInputField extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue: "0", max: "1", min: "1"};
        //this.value = this.state.inputValue;
        //TODO max and min in input
        this.onBlur = this.onBlur.bind(this);
    }
    set value(value){
        console.log(value+" setted");
        this.setState({
            inputValue: value
        });
        console.log(this.state.inputValue);
    }
    get value(){
        console.log("try to get "+ this.state.inputValue);
        return this.state.inputValue;
    }
    onBlur(e){
        this.value = e.target.value;
        console.log("value should be " + this.value);
    }
    render(){
        return <input type="number" min="1" max="1000"
        onBlur = {this.onBlur}
        placeholder = "Bet" style = {style}></input>
    }
}

module.exports = GameInputField;