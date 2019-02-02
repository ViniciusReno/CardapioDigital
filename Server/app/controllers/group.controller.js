const Group = require('../models/group.model.js');

// Create and Save a new group
exports.create = (req, res) => {
    // Validate request
    if(!req.body.users.length < 1) {
        return res.status(400).send({
            message: "The group can not have less than one user"
        });
    }

    // Create a group
    const group = new Group({
        name: req.body.name,
        users: req.body.users
    });

    // Save group in the database
    group.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the group."
        });
    });
};

// Retrieve and return all group from the database.
exports.findAll = (req, res) => {
    Group.find()
    .then(groups => {
        res.send(groups);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving group."
        });
    });
};

// Find a single group with a groupId
exports.findOne = (req, res) => {
    Group.findById(req.params.groupId)
    .then(group => {
        if(!group) {
            return res.status(404).send({
                message: "group not found with id " + req.params.groupId
            });            
        }
        res.send(group);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "group not found with id " + req.params.groupId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving group with id " + req.params.groupId
        });
    });
};

// Update a group identified by the groupId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "group name can not be empty"
        });
    }

    // Find group and update it with the request body
    Group.findByIdAndUpdate(req.params.groupId, {
        name: req.body.name,
        email: req.body.email
    }, {new: true})
    .then(group => {
        if(!group) {
            return res.status(404).send({
                message: "Group not found with id " + req.params.groupId
            });
        }
        res.send(group);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "group not found with id " + req.params.groupId
            });                
        }
        return res.status(500).send({
            message: "Error updating group with id " + req.params.groupId
        });
    });
};

// Delete a group with the specified groupId in the request
exports.delete = (req, res) => {
    Group.findByIdAndRemove(req.params.groupId)
    .then(group => {
        if(!group) {
            return res.status(404).send({
                message: "Group not found with id " + req.params.groupId
            });
        }
        res.send({message: "Group deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Group not found with id " + req.params.groupId
            });                
        }
        return res.status(500).send({
            message: "Could not delete group with id " + req.params.groupId
        });
    });
};