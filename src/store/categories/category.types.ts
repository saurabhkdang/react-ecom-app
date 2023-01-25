export enum CATEGORIES_ACTION_TYPES  {
    FETECH_CATEGORIES_START = 'category/FETECH_CATEGORIES_START',
    FETECH_CATEGORIES_SUCCESS = 'category/FETECH_CATEGORIES_SUCCESS',
    FETECH_CATEGORIES_FAILED = 'category/FETECH_CATEGORIES_FAILED',
}

export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type Category = {
    title: string;
    imageUrl: string;
    items: CategoryItem[];
}

export type CategoryMap = {
    [key: string] : CategoryItem[]
}