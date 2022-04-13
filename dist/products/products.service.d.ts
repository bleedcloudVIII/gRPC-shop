import { HttpStatus } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: typeof Product);
    create(dto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    delete(id: number): Promise<HttpStatus>;
    update(dto: UpdateProductDto): Promise<Product>;
}
