import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Length } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";

@Entity()
@ObjectType()
export default class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ Length: 2 })
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;
}