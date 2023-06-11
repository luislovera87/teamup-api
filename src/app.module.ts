import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { LeaguesModule } from './leagues/leagues.module';
import { MongooseModule } from '@nestjs/mongoose'
import { SharedModule } from './shared/shared.module';
import { CategoriesModule } from './categories/categories.module';
import { SportsModule } from './sports/sports.module';
import { TournamentsModule } from './tournaments/tournaments.module';

const host = !process.env.ENVIRONMENT ? "localhost" : "mongo";

@Module({
  imports: [
    UsersModule, 
    TeamsModule, 
    LeaguesModule,
    MongooseModule.forRoot(`mongodb://${host}:27017/teamup`),
    SharedModule,
    CategoriesModule,
    SportsModule,
    TournamentsModule,
    SportsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
