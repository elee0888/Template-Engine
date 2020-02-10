const employee = require('./employee.js');

class manager extends employee{
    constructor(Name, ID, Email, Office){
        super(Name, ID, Email);
        this.Office= Office;
    }

    getRole(){
        return "manager";
    }

    getOffice(){
        return this.Office;
    }
}

module.exports =manager;