
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div id="navbar-indicator">
                Navbar |
            </div>
            <div id="navbar-links">
                <div id="home">Home</div> 
                <div id="about">About</div>
                <div id="contact">Contact</div>
            </div>
            <div id="navbar-search">
                <form class="form-inline">
                        <input placeholder="Search" id="search-box"></input>
                        <button class="btn btn-outline-success" type="submit" id="search-button">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;