import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Character } from '../entity/Character';
import { validate } from 'class-validator';
import { getJwtData } from '../middleware/jwt';

export class CharacterController {
  static getAll = async (req: Request, res: Response): Promise<Response> => {
    const token = req.headers['x-auth-token'];
    let userData: any | null;
    if (token) {
      userData = getJwtData(token as string);
    }
    try {
      let characters: any = await getRepository(Character)
        .createQueryBuilder('character')
        .leftJoinAndSelect('character.userCharacterVote', 'userCharacterVote')
        .select('character.id', 'id')
        .addSelect('character.title', 'title')
        .addSelect('character.image', 'image')
        .addSelect('character.createdAt', 'createdAt')
        .addSelect('character.category', 'category')
        .addSelect('character.summary', 'summary')
        .addSelect('COUNT(*) as totalVotes')
        .addSelect(
          'COUNT(IF(userCharacterVote.vote = "up", 1, NULL)) "votesUp"',
        )
        .addSelect(
          "CONCAT(ROUND((COUNT(IF(userCharacterVote.vote = 'up', 1, NULL))/COUNT(*))*100,2)) as votesUpPercentage",
        )
        .addSelect(
          'COUNT(IF(userCharacterVote.vote = "down", 1, NULL)) "votesDown"',
        )
        .addSelect(
          "CONCAT(ROUND((COUNT(IF(userCharacterVote.vote = 'down', 1, NULL))/COUNT(*))*100,2)) as votesDownPercentage",
        )
        .groupBy('character.id');

      if (userData) {
        characters.addSelect(`COUNT(IF(userCharacterVote.userId = ${userData.userId}, 1, NULL)) "userTotalVotes"`)
      }
      const results = await characters.getRawMany();
      return res.json(results);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  };

  static create = async (req: Request, res: Response) => {
    const { title, image, category, summary } = req.body;
    const character = new Character();

    character.title = title;
    character.image = image;
    character.category = category;
    character.summary = summary;

    // validate
    const errors = await validate(character, {
      validationError: { target: false, value: false },
    });
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    try {
      await getRepository(Character).save(character);
    } catch (err) {
      return res.status(409).json({ message: 'Character already exists' });
    }

    //
    res.json('Character Created');
  };
}
