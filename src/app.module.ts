import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsModule } from './cat/cat.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      autoLoadModels: true,
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule {}