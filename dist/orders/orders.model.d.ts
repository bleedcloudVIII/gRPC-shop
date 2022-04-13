import { Model } from 'sequelize-typescript';
import { OrderItem } from 'src/orders-items/orders-items.model';
import { User } from 'src/users/users.model';
interface CreateOrderAtts {
    user_id: number;
}
export declare class Order extends Model<Order, CreateOrderAtts> {
    id: number;
    user_id: number;
    price: number;
    user: User;
    orderItem: OrderItem;
}
export {};
