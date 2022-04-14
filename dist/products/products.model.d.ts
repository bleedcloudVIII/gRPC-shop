import { Model } from 'sequelize-typescript';
import { Category } from 'src/category/category.model';
interface CreateProductAtts {
    name: string;
    cost: number;
}
export declare class Product extends Model<Product, CreateProductAtts> {
    id: number;
    name: string;
    cost: number;
    category: Category;
}
export {};
