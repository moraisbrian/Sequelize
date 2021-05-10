import { Router } from 'express';
import { usuarioController } from './controllers/usuario-controller';

const router: Router = Router();

router.post('/usuario', usuarioController.adicionar);

export { router };