
getDepartments = () => {
    console.log('we are getting departments');
    let query = `SELECT * FROM departments`;

    return query;
};

module.exports = {getDepartments};