"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersItemsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const orders_service_1 = require("../orders/orders.service");
const orders_items_model_1 = require("./orders-items.model");
let OrdersItemsService = class OrdersItemsService {
    constructor(ordersItemsService, ordersService) {
        this.ordersItemsService = ordersItemsService;
        this.ordersService = ordersService;
    }
    async create(dto) {
        const order = await this.ordersService.findOneByOrderId(dto.order_id);
        const newPrice = order.price + (dto.product_count * dto.product_price);
        await this.ordersService.UpdatePrice(newPrice, dto.order_id);
        return this.ordersItemsService.create(dto);
    }
    async findOneByOrderItemId(orderItem_id) {
        return this.ordersItemsService.findOne({ where: { id: orderItem_id } });
    }
    async findAllByOrderId(order_id) {
        return this.ordersItemsService.findAll({ where: { order_id: order_id } });
    }
    async delete(orderItem_id) {
        const orderItem = await this.ordersItemsService.findOne({ where: { id: orderItem_id } });
        const order = await this.ordersService.findOneByOrderId((await orderItem).id);
        const newPrice = order.price - (orderItem.product_count * orderItem.product_price);
        await this.ordersItemsService.destroy({ where: { id: orderItem_id } });
        await this.ordersService.UpdatePrice(newPrice, order.id);
        return common_1.HttpStatus.OK;
    }
    async update(dto) {
        await this.ordersItemsService.update(Object.assign({}, dto), { where: { id: dto.id } });
        const user = await this.ordersItemsService.findOne({ where: { id: dto.id } });
        return user;
    }
};
OrdersItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(orders_items_model_1.OrderItem)),
    __metadata("design:paramtypes", [Object, orders_service_1.OrdersService])
], OrdersItemsService);
exports.OrdersItemsService = OrdersItemsService;
//# sourceMappingURL=orders-items.service.js.map