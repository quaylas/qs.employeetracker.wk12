# WK12 | Employee Tracker | QS

  ## Description

  [![License: ISC](https://img.shields.io/badge/license-ISC-0d0042)](https://opensource.org/licenses/ISC)

  This application is a simple content management system for interacting with an employee database. 
  
  You can view a demo of this application [here](https://drive.google.com/file/d/1puk4bXJOk8bbSTH3cOBUe527f0pcLpaY/view).
  
  ## Table of Contents

  * [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)


  ## User Story and Acceptance Criteria

  ### User Story
  ```
  AS A business owner
  I WANT to be able to view and manage the departments, roles, and employees in my company
  SO THAT I can organize and plan my business 
  ```

  ### Acceptance Criteria
  ```
  WHEN I start the application
  THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
  ```
  ```
  WHEN I choose to view all departments
  THEN I am presented with a formatted table showing department names and department ids
  ```
  ```
  WHEN I choose to view all roles
  THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  ```
  ```
  WHEN I choose to view all employees
  THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  ```
  ```
  WHEN I choose to add a department
  THEN I am prompted to enter the name of the department and that department is added to the database
  ```
  ```
  WHEN I choose to add a role
  THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
  ```
  ```
  WHEN I choose to add an employee
  THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
  ```
  ```
  WHEN I choose to update an employee role
  THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
  ```
  ## Installation

  This application is run using Node.js with Inquirer, MySQL2, console.table, and dotenv packages. Visit the [Node.js website](http://www.nodejs.org/download/) for download and installation instructions. 
  
  Once you've installed Node.js, clone the repository and install its dependencies by running 
  ```
  $npm install
  ``` 
  in the command line in the root directory. 

  ## Usage

  When installation is complete, the application is initialized by the command 
  ```
  $ node index.js
  ```
  Users will be prompted to select an action to complete or to exit the program. 

  ## Contributions

  Contributions to this application are governed by [The Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

  ## Tests

  There are currently no tests available for this application.

  ## Questions

  This project was developed by [quaylas](https://github.com/quaylas). 
  Questions may be directed to [quayla@cxadvisors.com](mailto:quayla@cxadvisors.com).

  ## License

  This application is licensed under the [ISC License](https://opensource.org/licenses/ISC).
  

