const Header = ( props ) => {
    const { username } = props;
    return (
    <header>
        <div className="logo">PIZZA DAY</div>
        <input type="text" className="search-bar" placeholder="Search for the order #"/>
        <div className="username">{username}</div>
    </header>
    )
}

export default Header