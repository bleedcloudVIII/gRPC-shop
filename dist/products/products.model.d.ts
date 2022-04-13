import { Model } from 'sequelize-typescript';
interface CreateProductAtts {
    name: string;
    cost: number;
}
export declare class Product extends Model<Product, CreateProductAtts> {
    id: number;
    name: string;
    cost: number;
}
export {};
