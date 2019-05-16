import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { MaxLength } from 'class-validator';

// annotate things for talking to our mutation
// and returning the right type
@ObjectType()
@Entity('user')
export class UserEntity {
  //export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  // only gql not storing into db
  // its kind of aggregated field
  // @Field()
  // name: string;

  // @Field({ nullable: true })
  // @Column('text')
  // @MaxLength(200)
  // biography: string;

  // @Field()
  // nameprocessed: string;

  @Field()
  @Column('text')
  firstName: string;

  @Column('text', { nullable: true }) lastName: string;

  @Column('text') password: string;

  @Field()
  @Column('text', { unique: true, nullable: true })
  email: string;
}
