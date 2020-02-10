const employee = require('./employee.js');

class engineer extends employee{
    constructor(Name, ID, Email, Github){
        super(Name, ID, Email);
        this.Github= Github;
    }

    getRole(){
        return "engineer";
    }

    getGithub(){
        return this.Github;
    }
}

module.exports =engineer;