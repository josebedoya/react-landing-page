import { Router } from 'express';
import { CharacterController } from './../controller/CharacterController';
import { checkJwt } from './../middleware/jwt';

const router = Router();

// Get all characters
router.get('/', CharacterController.getAll);

// Create a new character
router.post('/', [checkJwt], CharacterController.create);

export default router;
