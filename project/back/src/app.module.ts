import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { WordService } from './word/word.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'votre_clé_secrète', // Changez cela par une clé secrète forte pour la production.
      signOptions: { expiresIn: '1h' }, // Durée de validité du token (1 heure dans cet exemple).
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '/home/aurele/motsdujour/project/database/bonjour.sqlite',
      entities: [User, 'dist/**/*.entity{.ts,.js}'],
      synchronize: true, // Cela créera automatiquement les tables (uniquement pour le développement)
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, WordService],
})
export class AppModule {}
