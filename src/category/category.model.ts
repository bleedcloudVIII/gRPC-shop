import { Table, Model, Column, DataType} from 'sequelize-typescript';
import { Product } from 'src/products/products.model';

interface CreateCategoryAtts {
    name: string;
}

@Table({tableName: 'category'})
export class Category extends Model<Category> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;
}