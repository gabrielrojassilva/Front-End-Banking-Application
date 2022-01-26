function NavBar(){
    return(
        <nav className = "navbar navbar-expand-lg">
            <a className = "navbar-brand" href="#">BadBank</a>
            <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li>
                        <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#/deposit/">Deposit</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#/withdraw/">Withdraw</a>
                    </li>
                    
                    {/*<li>
                        <a className="nav-link" href="#/balance/">Balance</a>
                    </li>*/}
                    <li>
                        <a className="nav-link" href="#/alldata/">Alldata</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#/login/">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}