const dbConfig = require("../../configuration/database");
const lodash = require('lodash');


exports.createOrder = async (req, res) => {
    const order = lodash.get(req, 'body.orderDetails');

    return dbConfig.db('orders').insert({
        'full_name': lodash.get(order, 'name'),
        'email': lodash.get(order, 'email'),
        'phone_number': lodash.get(order, 'phone_number'),
        'address': lodash.get(order, 'address'),
        'message': lodash.get(order, 'message'),
        'order_details': lodash.get(order, 'order_details'),
        'total_price': lodash.get(order, 'total_price')
    })
        .then(() => {
            return res.json({success: true});
        })
        .catch(error => {
                console.log('DATABASE ERROR', error);
                res.json({databaseError: error});
            }
        )
};
