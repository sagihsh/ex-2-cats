import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsModule } from './cat/cat.module';
import env from "./helpers/env";
import { MiceModule } from './mouse/mouse.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: env.DB_HOST,
      port: parseInt(env.DB_PORT),
      username: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    CatsModule,
    MiceModule,
  ],
})
export class AppModule {}