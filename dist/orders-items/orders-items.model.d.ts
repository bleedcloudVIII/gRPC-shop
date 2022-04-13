import { Model } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";
interface CreateOrderItemAtts {
    order_id: number;
    product_id: number;
    product_count: number;
    product_price: number;
}
export declare class OrderItem extends Model<OrderItem, CreateOrderItemAtts> {
    id: number;
    order_id: number;
    product_id: number;
    product_count: number;
    product_price: number;
    order: Order;
}
export {};
