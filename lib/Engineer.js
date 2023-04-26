// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// inherits employee data
const Employee = require("./Employee.js")   


//  takes engineer data
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name,id,email)

        this.github = github;
        this.role = 'Engineer';
    }
    addComment(comment) {
        this.comments.push(comment);
    }

    getGithub(){
        return this.github
    }
    
    getRole() {
        return this.role
    }
}

// exports engineer
module.exports = Engineer;