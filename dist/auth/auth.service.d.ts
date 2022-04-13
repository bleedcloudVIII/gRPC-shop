import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
    createHashPassword(password: string): Promise<string>;
}
