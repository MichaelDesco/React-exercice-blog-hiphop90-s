const Header = () => {
    // const isUserLoggedIn = true;

    function artistOnClick(e) {
        console.log(e.target);
        document.querySelectorAll(".articles").forEach(element => {
            element.style.display = "none";
        });
        // document.querySelector("#djPremier").style.display = "none";
        if (e.target.text==="Lord Finesse") {
            document.querySelector("#lordFinesse").style.display = "block";
            // document.querySelector()
        };

        if (e.target.text==="DJ Premier") {
            // document.querySelector("#djPremier").hidden = false
            document.querySelector("#djPremier").style.display = "block"
        };
        if (e.target.text==="DJ Muggs") {
            // document.querySelector("#djMuggs").hidden = false
            document.querySelector("#djMuggs").style.display = "block"
        };
        if (e.target.text==="Rakim") {
            // document.querySelector("#rakim").hidden = false;
            document.querySelector("#rakim").style.display = "block"
        };
    }
    return (
        <header>
            <img className="logo-oldschool" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Vinyl_disc_icon.svg/1200px-Vinyl_disc_icon.svg.png" alt="logo" />
            <div className="punchlineNav">
                <h1>Teach the youth to speak the truth show them what peace can do</h1>
                <nav>
                    <ul onClick={artistOnClick}>
                        <li><a href="#lordFinesse">Lord Finesse</a></li>
                        <li><a href="#djPremier">DJ Premier</a></li>
                        <li><a href="#djMuggs">DJ Muggs</a></li>
                        <li><a href="#rakim">Rakim</a></li>
                        {/* {isUserLoggedIn ? <li><a>Bonjour Michael</a></li> : <li><a>please log in</a></li>} */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;