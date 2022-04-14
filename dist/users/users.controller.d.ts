import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<import("./users.model").User[]>;
    findById(id: number): Promise<import("./users.model").User>;
    findByEmail(email: string): Promise<import("./users.model").User>;
    create(dto: CreateUserDto): Promise<import("./users.model").User>;
    update(dto: UpdateUserDto): Promise<import("./users.model").User>;
    delete(id: number): Promise<import("@nestjs/common").HttpStatus>;
}
