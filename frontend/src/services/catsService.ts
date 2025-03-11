import { Cat } from "../types/cat";
import env from "../helpers/env";

export const getAllCats = async (): Promise<Cat[]> => {
    const cats = await fetch(`${env.VITE_SERVER_URL}/cats`);
    return await cats.json();
} 