function AllData(){
    const ctx = React.useContext(UserContext);
    /*console.log(ctx.users[0].name)
    
    for (const property in ctx.users[0]) {
        console.log(`${ctx.users[0][property]}`);
    }
    console.log(ctx.users.length)*/
    return(
        <h1>All Data<br/>
            {/*JSON.stringify(ctx)*/}
            <table responsive className="table table-hover table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: ctx.users.length }).map((_, index) => (
                    <tr key={index}>{index+1}
                            <td key={0}>{(ctx.users[index].email)}</td>
                            <td key={1}>{(ctx.users[index].name)}</td>
                            <td key={2}>{(ctx.users[index].password)}</td>
                    </tr>
                ))}
            </tbody>
            </table>    
        </h1>
    );
}