import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(dto: CreateUserDto): Promise<{
        token: string;
    }>;
}
