const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
require('dotenv').config();
const cTable = require('console.table');

const { getDepartments, addDepartment, getNewDepartmentDetails } = require('./src/requests/departmentRequests');
const { getRoles, addRole, getNewRoleDetails } = require('./src/requests/roleRequests');
const { getEmployees, addEmployee, updateEmployee, getNewEmpDetails, getManagers, getEmpUpdateDetails } = require('./src/requests/employeeRequests');



async function getTask() {
    let questions = [
        {
            type:'list',
            name:'task',
            message: 'Which task would you like to complete?',
            choices: ['View all Departments','View all Roles','View all Employees','Add Department', 'Add Role','Add Employee','Update Employee Role', 'Exit']
        }
    ];

    return inquirer.prompt(questions);
};

async function main () {
    
// Create database connection
    const connection = await mysql.createConnection({
        host: 'localhost', 
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'empDB'
    });
    console.log('connected!');

    // Create loop marker 
    let exitTracker = false;
    
    while  (!exitTracker) {
        // Ask what task they'd like to complete
        const prompt = await getTask();
        
        // Proceed with switch cases for each selection
        switch(prompt.task){
            case 'View all Departments':{
                let sql = await getDepartments();
                const [rows, fields] = await connection.query(sql);
                console.table('Departments', rows);
                break;
            }

            case  'View all Roles': {
                let sql = await getRoles();
                const [rows, fields] = await connection.query(sql);
                console.table('Roles', rows);
                break;
            }

            case 'View all Employees': {
                let sql = await getEmployees();
                const [rows, fields] = await connection.query(sql);
                console.table('Employees', rows);
                break;
            }

            case 'Add Department' :{
                const newDeptInput = await getNewDepartmentDetails();
                const addDept = await addDepartment(newDeptInput);
                const [newDept] = await connection.query(addDept.sql, addDept.params);
                console.log(`Department ${addDept.params.dept_name} (ID:${newDept.insertId}) has been added!`);
                break;
                
            }

            case 'Add Role' : {
                let sql1 = await getDepartments();
                const [depts, fields] = await connection.query(sql1);
                const newRoleInput = await getNewRoleDetails(depts);
                const addNewRole = await addRole(newRoleInput);
                const [newRole] = await connection.query(addNewRole.sql, addNewRole.params);
                console.log(`Role ${addNewRole.params.title} (ID:${newRole.insertId}) has been added!`);
                break;
            }

            case 'Add Employee' : {
                let sql1 = await getRoles();
                const [roles, fields] = await connection.query(sql1);
                let sql2 = await getManagers();
                const [mgrs, mgrFields] = await connection.query(sql2);
                const newEmpInput = await getNewEmpDetails(roles, mgrs);
                const addEmp =  await addEmployee(newEmpInput);
                const [newEmp] = await connection.query(addEmp.sql, addEmp.params);
                console.log(`Employee ${addEmp.params.first_name} ${addEmp.params.last_name} (ID:${newEmp.insertId}) has been added!`);
                break;
            }

            case 'Update Employee Role' : {
                let sql1 = await getRoles();
                const [roles, fields] = await connection.query(sql1);
                let sql2 = await getEmployees();
                const [employees, empfields] = await connection.query(sql2);
                const updateEmpInput = await getEmpUpdateDetails('role', employees, roles);
                const updateEmp = await updateEmployee('role', updateEmpInput);
                const [updatedEmp] = await connection.query(updateEmp.sql, updateEmp.params);
                console.log(`Employee\'s Role has been updated!`);
                break;
            }

            case 'Exit' :{
                exitTracker = true;
                connection.end();
                break;
            }
        }
    }

};

main();