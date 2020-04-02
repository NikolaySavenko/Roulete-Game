var React = require('react');

const slyle = {
    height: "160px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "48px"
};

class HeaderText extends React.Component{
    render(){
        return <b style={slyle}>
                Welcome to  Game!
            </b>
    }
}

export default HeaderText;