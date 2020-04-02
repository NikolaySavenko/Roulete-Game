import GameManager from './managers/GameManager.jsx';

//var Balance = require('./components/balance.jsx');
import Balance from './components/balance';
import HeaderText from './components/header';
import GameInputField from './components/inputField';
import Buttons from './components/playButton';
import Result from './components/result';

var ReactDOM = require('react-dom');
var React = require('react');
/*var HeaderText = require('./components/header.jsx');
var GameInputField = require('./components/inputField.jsx');
var Buttons = require('./components/playButton.jsx');
var Result = require('./components/result.jsx');*/

ReactDOM.render(
    <HeaderText />,
    document.getElementById("header")
)

var balanceElement = ReactDOM.render(
    <Balance/>,
    document.getElementById("balance")
)

var inputField = ReactDOM.render(
    <GameInputField/>,
    document.getElementById("inputValue")
)

var result = ReactDOM.render(
    <Result />,
    document.getElementById("result")
)

var gameManager = new GameManager(balanceElement, result, inputField);

ReactDOM.render(
    <Buttons manager = {gameManager}/>,
    document.getElementById("buttons")
)