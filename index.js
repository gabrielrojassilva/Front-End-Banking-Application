function Spa(){

    return(
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value = {{users:[{name:'Gabriel',email:'gab@ucb.edu.bo',password:'secret',balance:150},
        {name:'Antonio',email:'ant@ucb.edu.bo',password:'secret',balance:200},
        {name:'Lu',email:'lu@ucb.edu.bo',password:'secret',balance:300}]}}>
                <Route path="/" exact component={home} />
                <Route path="/CreateAccount/" exact component={CreateAccount} />
                <Route path="/login/" exact component={Login} />
                <Route path="/deposit/" exact component={Deposit} />
                <Route path="/withdraw/" exact component={Withdraw} />
                {/*<Route path="/balance/" exact component={Balance} />*/}
                <Route path="/alldata/" exact component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)