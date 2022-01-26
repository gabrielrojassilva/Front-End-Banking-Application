function Withdraw(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const balance = ctx.users[0].balance;
    console.log(balance)

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        if(!validate(amount, 'amount')) return;
        if(parseInt(amount) > parseInt(balance)){
            alert("Transaction Failed")
        }
        else{
            var total = parseInt(balance) - parseInt(amount);
        }
        console.log(total)
        ctx.users[0].balance = total.toString();
        console.log(ctx.users[0].balance)
        
        setShow(false);
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <Card
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                <div>
                    <table class="table" style={{color:"white"}}>
                                <tbody>
                                    <tr>
                                        <th>Balance</th>
                                        <th>{balance}</th>
                                    </tr>
                                </tbody>
                    </table>
                </div> 
                Withdraw Amount<br/>
                <input type="number" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" disabled={!amount} className="btn btn-light" onClick={handleCreate}>Withdraw</button>
                </>
                ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another amount</button>
                </>
                )}
        />
    )
}