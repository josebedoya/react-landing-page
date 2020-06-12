import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Character } from '../entity/Character';
import { validate } from 'class-validator';

export class CharacterController {
  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const characters = await getRepository(Character).find();
      return res.json(characters);
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
