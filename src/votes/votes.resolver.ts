import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
//import { Arg, FieldResolver, Root } from 'type-graphql';

import * as bcrypt from 'bcryptjs';
import { VoteEntity } from './vote.entity';
// @Resolver('Votes')
// put the userobject inside !!
// use nestjs style
//@Resolver(UserEntity)
@Resolver('Votes')
export class VotesResolver {
  // @Query(() => String)
  @Query(returns => String)
  async helloWorld() {
    return `Hello my Friend`;
  }

  @Query(returns => [VoteEntity])
  async allVotes(): Promise<VoteEntity[]> {
    return VoteEntity.find();
  }

  // aggregate the gql only field called field resolver
  //   @FieldResolver()
  //   async name(@Root() parent: UserEntity) {
  //     return `${parent.firstName}`;
  //   }
  // we can move this over to our entity !!

  // leve query here or gql gets mad

  @Mutation(returns => String)
  async upVote(@Args('vote') vote: String) {
    return vote;
    // return `UpVote da shit`;
  }

  // // get the type into mutation
  // // so we need to Annotate our entity
  // // annotated now use the type
  // //@Mutation(() => UserEntity)
  // @Mutation(returns => UserEntity)
  // async register(
  //   //@Arg('firstName') firstName: string,
  //   @Args('firstName') firstName: string,
  //   // we need to make this thingy safe so lets
  //   // use bcrypt npm i bcrypt
  //   @Args('password') password: string,
  //   @Args('biography') biography: string,
  //   // typesafe with promise and user entity from db
  //   // will get back a promise from type user by our async func
  // ): Promise<UserEntity> {
  //   // hash the pass retrns a promise yep await
  //   const hashedPassword = await bcrypt.hash(password, 12);

  //   const user = await UserEntity.create({
  //     firstName,
  //     biography,
  //     password: hashedPassword,
  //   }).save();

  //   return user;

  //   // make it typesafe baby
  //   // return firstName;
  //   // also return 5 will be possible thats dumb
  // }
}
