const db = require('../models');
const validations = require('../utils/validations');

module.exports = {
    async addCalled(req, res) {
        const { client, clerk, subject, priority, status, situation } = req.body;

        let errors = [];

        if (validations.isNullOrEmpty(client)) {
            errors.push("O chamado deve possuir um cliente");
        } else {
            const hasClient = await db.models.User.findByPk(client);
            if (hasClient == null) errors.push("Cliente não consta na base de dados");
        }

        if (validations.isNullOrEmpty(subject)) {
            errors.push("O chamado deve possuir um assunto");
        } else {
            const hasSubject = await db.models.Subject.findByPk(subject);
            if (hasSubject == null) errors.push("Assunto não consta na base de dados");
        }

        if (validations.isNullOrEmpty(priority)) {
            errors.push("O chamado deve possuir uma prioridade");
        } else {
            const hasPriority = await db.models.Priority.findByPk(priority);
            if (hasPriority == null) errors.push("Prioridade não consta na base de dados");
        }

        if (validations.isNullOrEmpty(status)) {
            errors.push("O chamado deve possuir um status");
        } else {
            const hasStatus = await db.models.Status.findByPk(status);
            if (hasStatus == null) errors.push("Status não consta na base de dados");
        }

        if (validations.isNullOrEmpty(situation)) {
            errors.push("O chamado deve possuir uma situação");
        } else {
            const hasSituation = await db.models.Situation.findByPk(situation);
            if (hasSituation == null) errors.push("Situação não consta na base de dados");
        }
        
        if (!validations.isNullOrEmpty(clerk)) {
            const hasClerk = await db.models.User.findByPk(clerk);
            if (hasClerk == null) 
                errors.push("Atendente não consta na base de dados");
            else if (clerk == client) 
                errors.push("O cliente não pode ser o atendente do próprio chamado");
        }
        
        if (errors.length == 0) {
            db.models.Called.create({
                ClientId: client,
                ClerkId: clerk,
                SubjectId: subject,
                PriorityId: priority,
                StatusId: status,
                SituationId: situation
            })
            .then(result => res.status(201).json(result))
            .catch(err => res.status(400).json(err))
        } else {
            res.status(400).json(errors);
        }
    },

    getCalleds(req, res) {
        db.models.Called.findAll({ include: { all: true } })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    },

    getCalledById(req, res) {
        const id = req.params.id;

        db.models.Called.findByPk(id, { include: { all: true } })
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err));
    }
}