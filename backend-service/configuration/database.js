const path = require('path');
const knex = require('knex');


const databasePath = path.resolve(__dirname, '../datasources/database.sqlite');

exports.db = knex({
    client: 'sqlite3',
    connection: {
        filename: databasePath,
    },
    useNullAsDefault: true,
})
