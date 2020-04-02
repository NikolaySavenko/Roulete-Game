var minBetValue = 1;
class InputManager {
    constructor(inputElement){
        this.input = inputElement;
    }
    set maxBetValue(value){
        //this.input.setState({max: value.toString()});
    }
    get value(){
        //alert("this.input.value "+ this.input.value);
        return this.input.value;
    }
};

export default InputManager;