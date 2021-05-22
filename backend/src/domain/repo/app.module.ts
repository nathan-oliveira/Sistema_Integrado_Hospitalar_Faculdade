import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "src/presentation/controllers/app.controller"
import { UserController } from "src/presentation/controllers/user.controller"

import { AppService } from "src/domain/services/app.service"
import { UserService } from "src/domain/services/user.service"

import RepoModule from "./repo.module"
import * as ormOptions from "src/data/infrastructure/config/orm";

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService]
})
export class AppModule {}
