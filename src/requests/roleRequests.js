
const getRoles = () => {
    console.log('Fetching roles ...');
    let query = `SELECT * FROM roles`;
    return query;
};

const addRole = (depts) => {
    console.log(depts);
    let roleQuestions = [
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the new  role? (30 characters or fewer)',
            validate: roleNameInput => {
                if(!roleNameInput){
                    console.log('You must enter a name for the new role');
                    return false;
                } else if (roleNameInput.length > 30) {
                    console.log(`The role name must be fewer than 30 characters. The name you entered has ${roleNameInput.length} characers`);
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary for this role?',
            validate:  roleSalaryInput => {
                if(isNaN(parseInt(roleSalaryInput))){
                    console.log('You must enter a number value for the role salary');
                    return false;
                } else {
                    return true; 
                }
            }
        },
        {
            type: 'list',
            name: 'roleDeptId',
            message: 'What department will this role belong to?',
            choices: depts
        }
    ];

    console.log('Adding role ...');
    let query = `INSERT INTO roles SET ?`;
    return {query, roleQuestions};
};




module.exports = {getRoles, addRole};