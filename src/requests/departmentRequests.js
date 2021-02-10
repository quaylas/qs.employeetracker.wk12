
getDepartments = () => {
    console.log('Fetching departments ...');
    let sql = `SELECT * FROM departments`;
    return sql;
};

addDepartment = () => {
    console.log('Adding department ...');
    let sql = `INSERT INTO departments SET ?`;
    return sql;
};

module.exports = {getDepartments, addDepartment};