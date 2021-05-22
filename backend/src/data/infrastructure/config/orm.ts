import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const options: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "backend_hospital",
  synchronize: false,
  logging: false,
  entities: [
    "./dist/domain/models/database/*.entity{.ts,.js}"
  ],
  migrations: [
    "./dist/data/infrastructure/database/migrations/*{.ts,.js}"
  ],
  cli: {
    "migrationsDir": "./dist/data/infrastructure/database/migrations"
  }
}

module.exports = options;

//"entities": [__dirname + "/../**/*.entity{.ts,.js}"]
