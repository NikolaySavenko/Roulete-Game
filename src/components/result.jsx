var React = require('react');

let style = {
    textAlign: "center"
};

class Result extends React.Component {
    constructor(props){
        super(props);
        this.state = {result: "NULL"};
    }
    render(){
        return <h1 style = {style}>Result is: {this.state.result}</h1>
    }
}
export default Result;