import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { UserCharacterVote } from '../entity/UserCharacterVote';
import { validate } from 'class-validator';

export class UserCharacterVoteController {
  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const votes = await getRepository(UserCharacterVote).find();
      return res.json(votes);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  };

  static create = async (req: Request, res: Response) => {
    const { characterId, vote } = req.body;
    const { userId } = res.locals.jwtPayload;
    const characterVote = new UserCharacterVote();

    characterVote.userId = userId;
    characterVote.characterId = characterId;
    characterVote.vote = vote;

    // validate
    const errors = await validate(characterVote, {
      validationError: { target: false, value: false },
    });
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    try {
      await getRepository(UserCharacterVote).save(characterVote);
    } catch (err) {
      return res.status(409).json({ message: 'Error registering the vote' });
    }

    //
    res.json('Vote Registered');
  };
}
