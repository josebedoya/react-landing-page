import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['email'])
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
}
