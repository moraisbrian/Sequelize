const router = require('express').Router();

const subjectController = require('./controllers/subjectController');
const evaluationController = require('./controllers/evaluationController');
const priorityController = require('./controllers/priorityController');
const situationController = require('./controllers/situationController');
const statusController = require('./controllers/statusController');
const calledController = require('./controllers/calledController');
const userController = require('./controllers/userController');

router.post('/assunto', subjectController.addSubject);
router.get('/assunto', subjectController.getSubjects);
router.get('/assunto/:id', subjectController.getSubjectById);

router.post('/avaliacao', evaluationController.addEvaluation);
router.get('/avaliacao', evaluationController.getEvaluations);
router.get('/avaliacao/:id', evaluationController.getEvaluationById);

router.post('/prioridade', priorityController.addPriority);
router.get('/prioridade', priorityController.getPriorities);
router.get('/prioridade/:id', priorityController.getPriorityById);

router.post('/situacao', situationController.addSituation);
router.get('/situacao', situationController.getSituations);
router.get('/situacao/:id', situationController.getSituationById);

router.post('/status', statusController.addStatus);
router.get('/status', statusController.getAllStatus);
router.get('/status/:id', statusController.getStatusById);

router.post('/chamado', calledController.addCalled);
router.get('/chamado', calledController.getCalleds);
router.get('/chamado/:id', calledController.getCalledById);

router.post('/usuario', userController.addUser);
router.get('/usuario', userController.getUsers);
router.get('/usuario/:id', userController.getUserById);

module.exports = router;