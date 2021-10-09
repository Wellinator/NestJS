import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRole } from './users-roles.enum';
import { User } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository) private userRepository: UserRepository,
    ){}

    async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
        if (createUserDto.password != createUserDto.passwordConfirmation) {
          throw new UnprocessableEntityException('As senhas não conferem');
        } else {
          return this.userRepository.createUser(createUserDto, UserRole.ADMIN);
        }
      }
}
