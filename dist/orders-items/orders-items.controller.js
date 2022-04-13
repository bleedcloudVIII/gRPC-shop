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
exports.OrdersItemsController = void 0;
const common_1 = require("@nestjs/common");
const create_orderItem_dto_1 = require("./dto/create-orderItem.dto");
const update_orderItem_dto_1 = require("./dto/update-orderItem.dto");
const orders_items_service_1 = require("./orders-items.service");
let OrdersItemsController = class OrdersItemsController {
    constructor(orderItemService) {
        this.orderItemService = orderItemService;
    }
    findAllByOrderId(order_id) {
        return this.orderItemService.findAllByOrderId(order_id);
    }
    findOneByOrderItemId(orderItem_id) {
        return this.orderItemService.findOneByOrderItemId(orderItem_id);
    }
    delete(orderItem_id) {
        return this.orderItemService.delete(orderItem_id);
    }
    create(dto) {
        return this.orderItemService.create(dto);
    }
    update(dto) {
        return this.orderItemService.update(dto);
    }
};
__decorate([
    (0, common_1.Get)('/ByOrderId/:order_id'),
    __param(0, (0, common_1.Param)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersItemsController.prototype, "findAllByOrderId", null);
__decorate([
    (0, common_1.Get)(':orderItem_id'),
    __param(0, (0, common_1.Param)('orderItem_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersItemsController.prototype, "findOneByOrderItemId", null);
__decorate([
    (0, common_1.Delete)(':orderItem_id'),
    __param(0, (0, common_1.Param)('orderItem_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersItemsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orderItem_dto_1.CreateOrderItemDto]),
    __metadata("design:returntype", void 0)
], OrdersItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_orderItem_dto_1.UpdateOrderItamDto]),
    __metadata("design:returntype", void 0)
], OrdersItemsController.prototype, "update", null);
OrdersItemsController = __decorate([
    (0, common_1.Controller)('orders-items'),
    __metadata("design:paramtypes", [orders_items_service_1.OrdersItemsService])
], OrdersItemsController);
exports.OrdersItemsController = OrdersItemsController;
//# sourceMappingURL=orders-items.controller.js.map