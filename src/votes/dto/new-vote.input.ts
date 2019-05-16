import { InputType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewVoteInput {
  @Field()
  @MaxLength(30)
  vote: string;
}
