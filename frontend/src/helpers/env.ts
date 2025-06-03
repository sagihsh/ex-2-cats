interface Env {
    VITE_SERVER_URL?: string,
}

type VerifiedEnv = Required<Env>;

const getEnv = (): Env => {
    return {
        VITE_SERVER_URL: import.meta.env.VITE_SERVER_URL,
    };
};

const verifyEnv = (env: Env): VerifiedEnv => {
    for (const [key, value] of Object.entries(env)) {
        if (value === undefined) {
            alert(`Missing environment variable ${key} in .env file`);
        }
    }
    return env as VerifiedEnv;
};

const env = getEnv();
const verifiedEnv = verifyEnv(env);

export default verifiedEnv;