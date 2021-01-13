declare namespace API {
  export type Category = string;

  export interface Item {
    title: string;
    category: Category;
    id: number;
  }

  export interface DataModel {
    items: Item[];
    favourite_categories: Category[];
  }
}
