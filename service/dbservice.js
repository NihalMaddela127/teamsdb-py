let database = require('../config/dbconfig');
// const empdb = "employees";
let db;

async function connectdb() {
    db = await database();
    // console.log("db:",db);
}

connectdb();

module.exports = {
    async getData( err, res ){
        // db.createCollection(empdb, { strict: true }, function (err) {
            db.collection("aspirants").find({}).toArray((err, students) => {
                if (err) {
                    console.error("Error in retrieving students");
                    process.exit(1);
                }
                res.json(students);
            });
        // });
    }
}