const db = require('../models');

module.exports = {
    addStatus(req, res) {
        const { identification } = req.body;

        db.models.Status.create({ Identification: identification })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getAllStatus(req, res) {
        db.models.Status.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getStatusById(req, res) {
        const id = req.params.id;

        db.models.Status.findByPk(id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}