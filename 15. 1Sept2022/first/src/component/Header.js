import './Header.css';

const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}>Hello {props.title}, color is {headingStyle.color}</h1>
            <h2 className="h2Head">H2 heading</h2>
            <h3 className="h3Head">H3 heading</h3>
            <h4 className="abc">H4 heading</h4>
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