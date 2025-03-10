/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 */
import { Sequelize } from 'sequelize';
import env from "./env";

export const sequelize = new Sequelize(env.DB_URI);