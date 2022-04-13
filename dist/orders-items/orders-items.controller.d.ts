import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItamDto } from './dto/update-orderItem.dto';
import { OrdersItemsService } from './orders-items.service';
export declare class OrdersItemsController {
    private readonly orderItemService;
    constructor(orderItemService: OrdersItemsService);
    findAllByOrderId(order_id: number): Promise<import("./orders-items.model").OrderItem[]>;
    findOneByOrderItemId(orderItem_id: number): Promise<import("./orders-items.model").OrderItem>;
    delete(orderItem_id: number): Promise<import("@nestjs/common").HttpStatus>;
    create(dto: CreateOrderItemDto): Promise<import("./orders-items.model").OrderItem>;
    update(dto: UpdateOrderItamDto): Promise<import("./orders-items.model").OrderItem>;
}
