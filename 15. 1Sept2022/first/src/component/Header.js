import './Header.css';
import Button from "./Button";

const Header = (props) => {
    const onClick=(e)=>{
        console.log("click",e);
    };
    return (
        <header>
            <h1 style={headingStyle}>Hello {props.title}, color is {headingStyle.color}</h1>
            <h2 className="h2Head">H2 heading</h2>
            <h3 className="h3Head">H3 heading</h3>
            <h4 className="abc">H4 heading</h4>
            <Button color="green" text="Hello1" onClick1={onClick}/>
        </header>
    );
};

const headingStyle={
    color:'darkcyan',
    backgroundColor:'lightblue',
    textAlign:'center',

    
}

Header.defaultProps={
    color:"green",
}

export default Header;