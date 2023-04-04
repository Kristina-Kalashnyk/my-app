const dbConfig = require("../../configuration/database");
const lodash = require('lodash');

exports.getProducts = async (req, res) => {
    const count = lodash.get(req, 'query.size');
    const order = lodash.get(req, 'query.order', 'asc');
   
    return dbConfig.db.select('*').from('products').limit(count).orderBy('id', order)
        .then(data => {
            return res.json(data);
        })
        .catch(error => {
                console.log('DATABASE ERROR', error);
                res.json({databaseError: error});
            }
        )
};


exports.getById = async (req, res) => {
    const productId = lodash.toNumber(lodash.get(req, 'params.id'));
   
    return dbConfig.db.select('*').from('products').where('id', productId)
        .then(data => {
            product = lodash.head(data);
            console.log(product);

            return res.json(product);
        })
        .catch(error => {
                console.log('DATABASE ERROR', error);
                res.json({databaseError: error});
            }
        )
};
