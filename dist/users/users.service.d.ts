import { HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(dto: CreateUserDto): Promise<User>;
    update(dto: UpdateUserDto): Promise<void>;
    delete(id: number): Promise<HttpStatus>;
    findByEmail(email: string): Promise<User>;
}
