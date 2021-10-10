import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { ReturnUsetDto } from './dtos/return-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Post()
    async createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<ReturnUsetDto>{
        const user = await this.usersService.createAdminUser(createUserDto);
        return {
            user,
            message: 'Administrador cadastrado com sucesso'
        }
    }

    @Get()
    async getAllUsers(){
        return this.usersService.getAll();
    }
}
