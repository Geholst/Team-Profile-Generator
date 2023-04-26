// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js");

// takes intern data

class Intern extends Employee {
    constructor (name,id,email,school) {
        super (name,id,email)

        this.school = school;
        this.role = 'Intern';
    }

    addComment(comment) {
        this.comment.push(comment);
    }

    getSchool(){
        return this.school
    }

    getRole() {
        return this.role
    }
}

// exports Intern data
module.exports = Intern;