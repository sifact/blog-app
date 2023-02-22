export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface ICollectionResponse<T> {
    data: T;
}
