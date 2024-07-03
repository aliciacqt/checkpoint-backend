import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Length } from "class-validator";
import { ObjectType, Field, Int } from "type-graphql";

@Entity()
@ObjectType()
export default class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  @Length(2)
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;
}