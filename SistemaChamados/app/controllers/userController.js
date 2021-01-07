const db = require('../models');

module.exports = {
    addUser(req, res) {
        const { name, email } = req.body;

        db.models.User.create({ Name: name, Email: email })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getUsers(req, res) {
        db.models.User.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getUserById(req, res) {
        const id = req.params.id;

        db.models.User.findByPk(id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}