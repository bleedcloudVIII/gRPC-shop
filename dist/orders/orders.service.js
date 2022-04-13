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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const orders_model_1 = require("./orders.model");
let OrdersService = class OrdersService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(user_id) {
        return this.orderRepository.create(user_id);
    }
    async deleteByOrderId(order_id) {
        await this.orderRepository.destroy({ where: { id: order_id } });
        return common_1.HttpStatus.OK;
    }
    async findAll() {
        return this.orderRepository.findAll();
    }
    async findAllByUserId(user_id) {
        return this.orderRepository.findAll({ where: { user_id: user_id } });
    }
    async findOneByOrderId(order_id) {
        return this.orderRepository.findOne({ where: { id: order_id } });
    }
    async UpdatePrice(newPrice, order_id) {
        await this.orderRepository.update({ price: newPrice }, { where: { id: order_id } });
        return common_1.HttpStatus.OK;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(orders_model_1.Order)),
    __metadata("design:paramtypes", [Object])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map