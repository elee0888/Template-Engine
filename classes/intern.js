const employee = require('./employee.js');

class intern extends employee{
    constructor(Name, ID, Email, School){
        super(Name, ID, Email);
        this.School= School;
    }

    getRole(){
        return "intern";
    }

    getSchool(){
        return this.School;
    }
}

module.exports =intern;