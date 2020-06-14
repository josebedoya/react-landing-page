import { Router } from 'express';

import auth from './auth';
import user from './user';
import character from './character';
import characterVote from './characterVote';

const routes = Router();

routes.use('/api/auth', auth);
routes.use('/api/users', user);
routes.use('/api/characters', character);
routes.use('/api/characterVote', characterVote);

export default routes;