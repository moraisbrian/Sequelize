const db = require('../models');

module.exports = {
    addSituation(req, res) {
        const { identification } = req.body;

        db.models.Situation.create({ Identification: identification })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getSituations(req, res) {
        db.models.Situation.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getSituationById(req, res) {
        const id = req.params.id;

        db.models.Situation.findByPk(id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}