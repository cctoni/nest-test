import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity('vote')
export class VoteEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn() created: Date;

  @Field({ nullable: true })
  @Column('text')
  vote: string;

  @Field()
  @Column('text')
  downVote: Number;

  @Field()
  @Column('text')
  info: String;
}
