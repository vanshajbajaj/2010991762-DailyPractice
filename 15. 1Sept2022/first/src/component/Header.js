const Header = (props) => {
    return (
        <header><h1 style={{color:props.color}}>Hello {props.title}, color is {props.color}</h1></header>
    );
};

Header.defaultProps={
    color:"green",
}

export default Header;