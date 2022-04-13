"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersItemsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const orders_module_1 = require("../orders/orders.module");
const orders_items_controller_1 = require("./orders-items.controller");
const orders_items_model_1 = require("./orders-items.model");
const orders_items_service_1 = require("./orders-items.service");
let OrdersItemsModule = class OrdersItemsModule {
};
OrdersItemsModule = __decorate([
    (0, common_1.Module)({
        controllers: [orders_items_controller_1.OrdersItemsController],
        providers: [orders_items_service_1.OrdersItemsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([orders_items_model_1.OrderItem]),
            orders_module_1.OrdersModule
        ]
    })
], OrdersItemsModule);
exports.OrdersItemsModule = OrdersItemsModule;
//# sourceMappingURL=orders-items.module.js.map