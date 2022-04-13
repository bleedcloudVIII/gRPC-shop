import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrdersService } from 'src/orders/orders.service';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItamDto } from './dto/update-orderItem.dto';
import { OrderItem } from './orders-items.model';

@Injectable()
export class OrdersItemsService {

    constructor(@InjectModel(OrderItem) private readonly ordersItemsService: typeof OrderItem,
    private readonly ordersService: OrdersService) {}

    async create(dto: CreateOrderItemDto) {
        const order = await this.ordersService.findOneByOrderId(dto.order_id);
        const newPrice = order.price + (dto.product_count * dto.product_price);
        await this.ordersService.UpdatePrice(newPrice, dto.order_id);
        return this.ordersItemsService.create(dto);
    }

    async findOneByOrderItemId(orderItem_id: number) {
        return this.ordersItemsService.findOne({where: {id: orderItem_id}});
    }

    async findAllByOrderId(order_id: number) {
        return this.ordersItemsService.findAll({where: {order_id: order_id}});
    }

    async delete(orderItem_id: number) {
        const orderItem = await  this.ordersItemsService.findOne({where: {id: orderItem_id}});
        const order = await this.ordersService.findOneByOrderId((await orderItem).id);
        const newPrice = order.price - (orderItem.product_count * orderItem.product_price);
        await this.ordersItemsService.destroy({where: {id: orderItem_id}});
        await this.ordersService.UpdatePrice(newPrice, order.id);
        return HttpStatus.OK;
    }

    async update(dto: UpdateOrderItamDto) {
        await this.ordersItemsService.update({...dto},{where: {id: dto.id}});
        const user = await this.ordersItemsService.findOne({where: {id: dto.id}});
        return user;
    }
}
