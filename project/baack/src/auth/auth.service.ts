import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './auth.controller';
import { ConflictException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    email: string;
    
    @Column()
    password: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}

  private async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
async register(createUserDto: CreateUserDto): Promise<void> {
  const { email, password } = createUserDto;
    // Vérifier si l'utilisateur existe déjà dans la base de données.
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Cet utilisateur existe déjà');
    }

    // Hacher le mot de passe avant de l'enregistrer dans la base de données.
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Créer un nouvel utilisateur avec le mot de passe haché et l'enregistrer dans la base de données.
    const newUser = this.userRepository.create({ email:email, password: hashedPassword });
    await this.userRepository.save(newUser);
    console.log("nouvel utilisateur : ", email);
  }


async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user && this.validatePassword(password, user.password)) {
      // Si les informations d'identification sont valides, retournez l'utilisateur.
      return user;
    }
    // Si les informations d'identification sont invalides, retournez null.
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}