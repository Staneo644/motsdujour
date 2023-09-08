import { Injectable } from '@nestjs/common';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mot: string;

  @Column()
  definition: string;

  @Column()
  etymologie: string;

  @Column()
  nature: string;

  @Column()
  theme: string;

  @Column({ default: false })
  proposeParUtilisateur: boolean;

  @Column({ default: false })
  valideParAdmin: boolean;
}

@Injectable()
export class WordService {}
