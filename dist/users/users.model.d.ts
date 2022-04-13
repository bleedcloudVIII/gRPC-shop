import { Model } from 'sequelize-typescript';
interface CreateUserAtts {
    email: string;
    password: string;
}
export declare class User extends Model<User, CreateUserAtts> {
    id: number;
    email: string;
    password: string;
}
export {};
