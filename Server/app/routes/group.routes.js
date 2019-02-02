module.exports = (app) => {
    const groups = require('../controllers/group.controller.js');

    // Create a new Note
    app.post('/groups', groups.create);

    // Retrieve all control
    app.get('/groups', groups.findAll);

    // Retrieve a single Note with groupId
    app.get('/groups/:groupId', groups.findOne);

    // Update a Note with groupId
    app.put('/groups/:groupId', groups.update);

    // Delete a Note with groupId
    app.delete('/groups/:groupId', groups.delete);
}