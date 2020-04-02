var React = require('react');

function getHtmColor(color){
    switch(color){
        case "RED" :
            return "#FF0000";
        case "BLACK" :
            return "#000000";
        case "GREEN" :
        default:
            return "#00FF00";
    }
}

function getButtonStyle(color){
    let htmColor = getHtmColor(color);
    console.log(htmColor);
    return {
        display: "inline",
        alignItems: "center",
        backgroundColor: htmColor,
        height: "60px",
        width: "180px",
        marginLeft: "115px"
    }
}

class PlayButton extends React.Component{
    constructor(props){
        super(props);
        this.color = props.color;
        this.press = this.press.bind(this);
    }
    render(){
        return <button style={getButtonStyle(this.color)} onClick = {this.press}></button>
    }
    press(){
        this.props.manager.onButtonClick(this.color);
        //alert(this.props.manager.inputManager.value);
    }
}
PlayButton.defaultProps = {color: "GREEN"};

let blockStyle = {
    padding: "48px",
    marginLeft: "80px"
};

class Buttons extends React.Component{
    render(){
        return <h1 style = {blockStyle}>
            <PlayButton color = "RED" manager = {this.props.manager}></PlayButton>
            <PlayButton manager = {this.props.manager}></PlayButton>
            <PlayButton color = "BLACK" manager = {this.props.manager}></PlayButton>
        </h1>
    }
}
export default Buttons;