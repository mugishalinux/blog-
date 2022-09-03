import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Citizen extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @IsNotEmpty()
  @Column({ nullable: false })
  firstName:string
  @IsNotEmpty()
  @Column({ nullable: false })
  lastName:string
  @IsNotEmpty()
  @Column({ nullable: false })
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  @Column({ nullable: false })
  email: string;
}
