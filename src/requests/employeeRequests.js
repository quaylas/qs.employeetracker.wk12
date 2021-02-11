const inquirer = require("inquirer");

async function  getEmployees()  {
    console.log('Fetching Employees ...');
    let sql = `SELECT * FROM employees`;

    return sql;
};

async function getNewEmpDetails(roleArray) {
    let roles = roleArray.map(role => { return `${role.title} (ID: ${role.id})`});

    let questions = [
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employee\'s first name? (30 characters or fewer)',
            validate: firstNameInput => {
                if(!firstNameInput){
                    console.log('You must enter a first name for the new employee');
                    return false;
                } else if (firstNameInput.length > 30) {
                    console.log(`The first name must be fewer than 30 characters. The name you entered has ${firstNameInput.length} characers`);
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employee\'s last name? (30 characters or fewer)',
            validate: lastNameInput => {
                if(!lastNameInput){
                    console.log('You must enter a name for the new role');
                    return false;
                } else if (lastNameInput.length > 30) {
                    console.log(`The last name must be fewer than 30 characters. The name you entered has ${lastNameInput.length} characers`);
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What role will this employee have?',
            choices: roles
        },
        {
            type: 'confirm',
            name: 'has_mgr',
            message: 'Will this employee have a manager?'
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Select the appropriate manager',
            choices: roles,
            when:  ({has_mgr}) => {
                if(has_mgr) {
                    return true;
                } 
                else { return false; }
            }
        }
    ];

    return inquirer.prompt(questions);

};

async function addEmployee(newEmpInput) {
    console.log('Adding Role ...');
    let sql = `INSERT INTO employees SET ?`;
    let role_id = newEmpInput.role_id.split(': ')[1];
    let manager_id = null;
    if(newEmpInput.manager_id){
        manager_id = parseInt(newEmpInput.manager_id.split(': ')[1]);
        };
    let params = {
        first_name: newEmpInput.first_name,
        last_name: newEmpInput.last_name,
        role_id: parseInt(role_id),
        manager_id: manager_id
    };
    return {
        sql,
        params
    };
};

module.exports = {getEmployees, addEmployee, getNewEmpDetails};