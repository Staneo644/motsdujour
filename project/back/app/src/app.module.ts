import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



const URI = 'mongodb://127.0.0.1:27017/test';

@Module({
  
  imports: [MongooseModule.forRoot(URI, {
  
  }), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
