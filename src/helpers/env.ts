import 'dotenv/config';

interface Env {
    DB_HOST?: string,
    DB_PORT?: string,
    DB_USER?: string,
    DB_PASS?: string,
    DB_NAME?: string,
}

type VerifiedEnv = Required<Env>;

const getEnv = (): Env => {
    return {
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_NAME: process.env.DB_NAME,
    };
};

const verifyEnv = (env: Env): VerifiedEnv => {
    for (const [key, value] of Object.entries(env)) {
        if (value === undefined) {
            throw new Error(`Missing environment variable ${key} in .env file`);
        }
    }
    return env as VerifiedEnv;
};

const env = getEnv();
const verifiedEnv = verifyEnv(env);

export default verifiedEnv;