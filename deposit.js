function Deposit(){
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
        if(parseInt(amount) < 0){
            alert("Positive Numbers Only")
        }
        else{
            var total = parseInt(balance) + parseInt(amount);
        }
        console.log(amount)
        //ctx.users.push({name,email,password,balance:100+amount});
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
            bgcolor="success"
            header="Deposit"
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
                Deposit Amount<br/>
                <input type="number" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                {/*isNaN(parseInt(amount)) ? (alert("Only numbers")):(console.log(amount))*/}
                <button type="submit" disabled={!amount} className="btn btn-light" onClick={handleCreate}>Deposit</button>
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