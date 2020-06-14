import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from './User';
import { Character } from './Character';

@Entity()
export class UserCharacterVote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  userId: number;

  @Column()
  @IsNotEmpty()
  characterId: number;

  @Column({
    length: 5,
  })
  @IsNotEmpty()
  vote: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(type => User, user => user.userCharacterVote)
  user: User;

  @ManyToOne(type => Character, character => character.userCharacterVote)
  character: Character;
}