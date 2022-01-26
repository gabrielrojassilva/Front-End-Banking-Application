function home(){
    return(
        <Card
            txtcolor="black"
            header="BadBank Landing Page"
            title="WELCOME TO THE BANK"
            text="For all your banking needs"
            body={(<img src="bank.jpeg" className="img-fluid" alt="Responsive Image"/>)}
        />
    );
}