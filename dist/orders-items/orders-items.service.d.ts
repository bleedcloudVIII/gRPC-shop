import { HttpStatus } from '@nestjs/common';
import { OrdersService } from 'src/orders/orders.service';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItamDto } from './dto/update-orderItem.dto';
import { OrderItem } from './orders-items.model';
export declare class OrdersItemsService {
    private readonly ordersItemsRepository;
    private readonly ordersService;
    constructor(ordersItemsRepository: typeof OrderItem, ordersService: OrdersService);
    create(dto: CreateOrderItemDto): Promise<OrderItem>;
    findOneByOrderItemId(orderItem_id: number): Promise<OrderItem>;
    findAllByOrderId(order_id: number): Promise<OrderItem[]>;
    delete(orderItem_id: number): Promise<HttpStatus>;
    update(dto: UpdateOrderItamDto): Promise<OrderItem>;
}
