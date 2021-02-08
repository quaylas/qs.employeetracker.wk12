-- Drop any existing employee database 
DROP DATABASE IF EXISTS empDB;
-- Create employee database
CREATE DATABASE empDB;

USE empDB;

-- Departments table
CREATE TABLE departments(
    id INTEGER(7) AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR (30) NOT NULL
);

-- Roles table
CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Employees table
CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id int,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);