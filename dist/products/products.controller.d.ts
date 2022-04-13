import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findOne(id: number): Promise<import("./products.model").Product>;
    findAll(): Promise<import("./products.model").Product[]>;
    create(dto: CreateProductDto): Promise<import("./products.model").Product>;
    delete(id: number): Promise<import("@nestjs/common").HttpStatus>;
    update(dto: UpdateProductDto): Promise<import("./products.model").Product>;
}
