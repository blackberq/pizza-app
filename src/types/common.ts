import { LanguageCode } from "../constants/languageCodes";

export type PizzaMenu = {
  [key: LanguageCode]: Array<PizzaMenuOptions>;
};

export type PizzaMenuOptions = {
  id: string;
  name: string;
  ingridients: Array<string>;
  image: string;
};
