import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { IsEmail, MinLength, MaxLength, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcryptjs';

export enum Status {
  MARRIED = 'Married',
  SINGLE = 'Single',
  DIVORCED = 'Divorced',
  WIDOWED = 'Widowed'
}

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  @IsNotEmpty()
  firstName: string;

  @Column({
    length: 30,
  })
  lastName: string;

  @Column({
    length: 100,
  })
  @IsEmail()
  email: string;

  @Column({
    length: 80,
  })
  @MinLength(6)
  @MaxLength(30)
  @IsNotEmpty()
  password: string;

  @Column({
    width: 3,
  })
  age: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.SINGLE,
  })
  maritalStatus: Status;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async generatePasswordHash(): Promise<void> {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compareSync(password, this.password);
  }
}
