import { InputType, Field } from 'type-graphql';
import { MaxLength, IsOptional, Length, IsNotEmpty } from 'class-validator';

@InputType()
export class NewUserInpunt {
  @Field()
  @IsNotEmpty()
  readonly firstName: string;

  @Field()
  @IsNotEmpty()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  readonly password: string;
}
