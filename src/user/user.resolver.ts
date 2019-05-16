import { Resolver, Args, Query, Mutation, Subscription } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { PubSub } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import { NewUserInpunt } from './dto/new-user.input';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(of => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(returns => UserEntity)
  async register(
    // We implement our new new-user input from dto
    @Args('newUserInput') newUserInput: NewUserInpunt,
    // @Args('firstName') firstName: string,
    // @Args('password') password: string,
    // @Args('biography') biography: string,
  ): Promise<UserEntity> {
    // hash the pass retrns a promise yep await
    // const hashedPassword = await bcrypt.hash(password, 12);

    // now lets move all the logic over to a user service
    const user = await this.userService.createUser(newUserInput);
    pubSub.publish('userAdded', { userAdded: user });

    return user;

    // const user = await UserEntity.create({
    //   //@Arg('firstName') firstName: string,

    //   firstName,
    //   // we need to make this thingy safe so lets
    //   biography,
    //   // typesafe with promise and user entity from db
    //   // will get back a promise from type user by our async func
    //   password: hashedPassword,
    // }).save();

    // return user;
    // make it typesafe baby
    // return firstName;
    // also return 5 will be possible thats dumb
  }

  @Query(returns => [UserEntity])
  async allUsers(): Promise<UserEntity[]> {
    return await this.userService.allUsers();
  }

  @Subscription(returns => UserEntity)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
