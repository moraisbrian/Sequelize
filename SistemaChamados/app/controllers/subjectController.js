const db = require('../models');

module.exports = {
    addSubject(req, res) {
        const { identification } = req.body;

        db.models.Subject.create({ Identification: identification })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getSubjects(req, res) {
        db.models.Subject.findAll()
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getSubjectById(req, res) {
        const id = req.params.id;

        db.models.Subject.findByPk(id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}