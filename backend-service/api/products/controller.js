const dbConfig = require("../../configuration/database");
const lodash = require('lodash');

exports.getProducts = async (req, res) => {
    const count = lodash.get(req, 'query.size');
    const order = lodash.get(req, 'query.order', 'asc');

    return dbConfig.db.select('*').from('products').limit(count).orderBy('id', order)
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
