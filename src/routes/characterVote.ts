import { Router } from 'express';
import { UserCharacterVoteController } from './../controller/UserCharacterVoteController';
import { checkJwt } from './../middleware/jwt';

const router = Router();

// Get all characters
router.get('/', UserCharacterVoteController.getAll);

// Create a new character
router.post('/', [checkJwt], UserCharacterVoteController.create);

export default router;
