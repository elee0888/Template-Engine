class employee{
    constructor( Name, ID, Email){
        this.ID = ID;
        this.Name = Name;
        this.Email = Email;
    }

    getName(){
        return this.Name;
    }

    getID(){
        return this.ID;
    }

    getEmail(){
        return this.Email;
    }

    getRole(){
        return "employee";
    }
}

module.exports=employee;