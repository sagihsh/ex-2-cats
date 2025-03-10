# How to run
- Make sure you have a .env file containing all the relevant values listed in the helpers/env.ts file
- Run `npm start`

# How to use db migrations
## Migration Up
- Create tables with `npx sequelize-cli db:migrate`
- Insert seed data with `npx sequelize-cli db:seed:all`

## Migration Down
- Empty tables with: `npx sequelize-cli db:seed:undo`
- Drop tables with: `npx sequelize-cli db:migrate:undo`