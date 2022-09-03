import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CitizenModule } from './citizen/citizen.module';
import { Citizen } from './citizen/entity/citizen';

function UserModule() {

}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestest',
      entities: [Citizen],
      synchronize: true,
    }),
    CitizenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
