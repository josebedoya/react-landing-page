import { Router } from 'express';

import auth from './auth';
import user from './user';
import character from './character';

const routes = Router();

routes.use('/api/auth', auth);
routes.use('/api/users', user);
routes.use('/api/characters', character);

export default routes;