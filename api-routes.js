// Filename: api-routes.js
// Initialize express router


// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to Node API + Tracing crafted for CAKE with love!',
    });
});
// Import contact controller
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

