function CreateAccount(){

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(name,label1,email,label2,password,label3){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!name) {
            setStatus('Error: ' + label1);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (label2="email"){
            if(!email.match(mailformat)){
                setStatus('Wrong mail: ' + label2);
                setTimeout(() => setStatus(''),3000);
                return false;
            }
        }
        if (!password) {
            setStatus('Error: ' + label3);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        if(!validate(name,'name',email, 'email',password, 'password')) return;
        //if(!validate(email, 'email')) return;
        //if(!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        alert("Sucessfully Created Account")

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
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" disabled={!name||!email||!password} className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
                ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
                )}
        />
    )
}