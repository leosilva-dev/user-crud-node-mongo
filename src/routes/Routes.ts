import { Router } from 'express';
import { UserController } from '../controllers';
import {UsersValidade} from '../Middlewares/Users/UserValidate'

const routes = Router();

routes.get('/users', UserController.getAll);
routes.get('/users/:id', UserController.getById);
routes.post('/users', UsersValidade.create, UserController.create);
routes.put('/users/:id', UserController.updateById);
routes.delete('/users/:id', UserController.deleteById);

export { routes };                            