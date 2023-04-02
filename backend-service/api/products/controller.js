const dbConfig = require("../../configuration/database");

exports.getAll = async (req, res) => {
    return dbConfig.db.select('*').from('products')
        .then(data => {
            console.log(data);
            return res.json(data);
        })
        .catch(error => {
                console.log('DATABASE ERROR', error);
                res.json(error);
            }
        )
}
