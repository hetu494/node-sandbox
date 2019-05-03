const tracer = require('dd-trace')

let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to Node API + Tracing crafted for CAKE with love!',
    });
});

var Request = require("request");

var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
//    .patch(contactController.update)
 //   .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;

