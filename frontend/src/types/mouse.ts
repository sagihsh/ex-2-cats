import { Cat } from "./cat";

export interface Mouse {
  name: string;
  catId: number;
  cat: Cat;
}
