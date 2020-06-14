import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { UserCharacterVote } from './UserCharacterVote';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  @IsNotEmpty()
  title: string;

  @Column({
    length: 100,
  })
  @IsNotEmpty()
  image: string;

  @Column({
    length: 30,
  })
  @IsNotEmpty()
  category: string;

  @Column({
    length: 120,
  })
  @IsNotEmpty()
  summary: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(type => UserCharacterVote, userCharacterVote => userCharacterVote.character)
  userCharacterVote: UserCharacterVote[];
}
