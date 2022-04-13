import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("./orders.model").Order[]>;
    findOneByOrderId(id: number): Promise<import("./orders.model").Order>;
    findAllByUserId(id: number): Promise<import("./orders.model").Order[]>;
    delete(id: number): Promise<import("@nestjs/common").HttpStatus>;
    create(id: number): Promise<import("./orders.model").Order>;
}
