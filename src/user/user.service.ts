import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { NewUserInpunt } from './dto/new-user.input';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async allUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async createUser(dto: NewUserInpunt): Promise<UserEntity> {
    //   check uniqueness of username/email
    const { firstName, email, password } = dto;

    // create the new user
    let user = new UserEntity();
    user.firstName = firstName;
    user.email = email;
    user.password = password;

    const newUser = await this.userRepository.save(user);

    return newUser;

    // const errors = await validate(newUser);
    // if (errors.length > 0) {
    //   const _errors = { firstName: 'Userinput not valid' };
    //   throw new HttpException(
    //     { message: `Input data validation failed`, _errors },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // } else {
    //   const savedUser = await this.userRepository.save(newUser);
    //   console.log(savedUser);
    //   return this.createUser(savedUser);
    // }
  }
}
