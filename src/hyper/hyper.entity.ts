import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hyper {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstParam: string;

  @Column()
  secondParam: string;
}