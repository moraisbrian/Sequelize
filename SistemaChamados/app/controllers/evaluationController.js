const db = require('../models');

module.exports = {
    addEvaluation(req, res) {
        const { identification } = req.body;

        db.models.Evaluation.create({ Identification: identification })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getEvaluations(req, res) {
        db.models.Evaluation.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getEvaluationById(req, res) {
        const id = req.params.id;

        db.models.Evaluation.findByPk(id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}