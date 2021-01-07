const db = require('../models');

module.exports = {
    addPriority(req, res) {
        const { identification, time } = req.body;

        db.models.Priority.create({ Identification: identification, Time: time })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getPriorities(req, res) {
        db.models.Priority.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getPriorityById(req, res) {
        const id = req.params.id;

        db.models.Priority.findByPk(id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}