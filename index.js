const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();
const cTable = require('console.table');

const { getDepartments, addDepartment } = require('./src/requests/departmentRequests');
// const { getRole, addRole } = require('./src/requests/roleRequests');
// const { getEmployee, addEmployee, updateEmployee } = require('./src/requests/employeeRequests');

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'empDB'
});

connection.connect(err => {
    if(err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
});

getTask = () => {
    let questions = [
        {
            type:'list',
            name:'task',
            message: 'Which task would you like to complete? (use arrow keys)',
            choices: ['View all Departments','View all Roles','View all Employees','Add Department', 'Add Role','Add Employee','Update Employee Roll']
        }
    ];

    return inquirer.prompt(questions);
};

getNewObjDetails = (objType, questionsArray) => {
    let questions = [];

    if(objType === 'dept'){
        questions = [{
            type: 'input',
            name: 'deptName',
            message: 'What is the name of the new department? (30 characters or fewer)',
            validate: deptNameInput => {
                if(!deptNameInput){
                    console.log('You must enter a name for the new department');
                    return false;
                } else if (deptNameInput.length > 30) {
                    console.log(`The department name must be fewer than 30 characters. The name you entered has ${deptNameInput.length} characers`);
                    return false;
                } else {
                    return true;
                }
            }
        }];
        return inquirer.prompt(questions);
    };

    if(objType === 'role') {
        return inquirer.prompt(questionsArray);
    }
    
};

const taskHandler = (task) => {
    if(task === 'View all Departments') {
        connection.query(getDepartments(),function(err, rows){
            if(err) throw err;
            console.table('Departments', rows);
        });
        connection.end();
    }
    else if(task === 'View all Roles') {
        console.log('the task is to get roles');
    }
    else if(task === 'View all Employees') {
        console.log('the task is to get employees');
    }
    else if(task === 'Add Department') {
        const query = addDepartment();
        getNewObjDetails('dept')
        .then(userInput => {
            connection.query(query, 
                {
                    dept_name: userInput.deptName
                }, 
                function(err, res){
                    if(err) throw err;
                    console.log(`A new department has been created! \n Department Name: ${userInput.deptName} \n Department ID: ${res.insertId}`);
                    connection.end();
            });
        });
    }
    else if(task === 'Add Role') {
        console.log('the task is to add a role');
        console.log(depts);
    }
    else if(task === 'Add Employee') {
        console.log('the task is to add an employee');
    }
    else if(task === 'Update Employee Roll') {
        console.log('the task is to update an employee\'s role');
    }
};

afterConnection = () => {
    getTask()
        .then(response => {
            taskHandler(response.task);
        })
        .catch(err => {
            console.log(err);
            connection.end;
        }); 
};