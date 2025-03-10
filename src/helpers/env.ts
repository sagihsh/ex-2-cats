import 'dotenv/config';

interface Env {
    DB_URI?: string;
}

type VerifiedEnv = Required<Env>;

const getEnv = (): Env => {
    return {
        DB_URI: process.env.DB_URI,
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