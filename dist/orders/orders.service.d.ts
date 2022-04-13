import { HttpStatus } from '@nestjs/common';
import { Order } from './orders.model';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: typeof Order);
    create(user_id: number): Promise<Order>;
    deleteByOrderId(order_id: number): Promise<HttpStatus>;
    findAll(): Promise<Order[]>;
    findAllByUserId(user_id: number): Promise<Order[]>;
    findOneByOrderId(order_id: number): Promise<Order>;
    UpdatePrice(newPrice: number, order_id: number): Promise<HttpStatus>;
}
