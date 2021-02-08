-- Department seeds
INSERT INTO departments (dept_name) VALUES ('Engineering');
INSERT INTO departments (dept_name) VALUES ('Finance');
INSERT INTO departments (dept_name) VALUES ('Sales');
INSERT INTO departments (dept_name) VALUES ('Legal');

-- Role seeds
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 80000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 90000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Lead', 80000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Salesperson', 60000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Lawyer', 175000, 4);

-- Employee seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Geordi','La Forge',1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Reginald','Barclay', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Miles','O''Brien', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Wesley','Crusher', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Scrooge','McDuck', 3, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Andy','Bernard', 4, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jim','Halpert', 5, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Dwight','Schrute', 5, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Tim','Canterbury', 5, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Vincent','Gambini', 6, NULL);