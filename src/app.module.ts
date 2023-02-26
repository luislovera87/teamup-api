import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { LeaguesModule } from './leagues/leagues.module';
import { MongooseModule } from '@nestjs/mongoose'
// import { User, UserSchema } from './users/user.schema';

@Module({
  imports: [
    UsersModule, 
    TeamsModule, 
    LeaguesModule,
    MongooseModule.forRoot('mongodb://localhost/teamup')  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
