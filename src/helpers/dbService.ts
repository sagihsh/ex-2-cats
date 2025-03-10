/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 */
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://myuser:mypassword@localhost:5432/mydatabase');