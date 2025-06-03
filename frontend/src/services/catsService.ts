import { Cat } from "../types/cat";
import env from "../helpers/env";

type Mouse = { name: string };

export interface NewCatInput {
    name: string;
    description: string;
    image: string;
    mice: Mouse[];
}

export const getAllCats = async (): Promise<Cat[]> => {
    const cats = await fetch(`${env.VITE_SERVER_URL}/cats`);
    return await cats.json();
} 

export const addNewCat = async (newCat: NewCatInput): Promise<Cat> => {
    const savedCat = await fetch(`${env.VITE_SERVER_URL}/cats`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCat),
    });

    return await savedCat.json();
} 