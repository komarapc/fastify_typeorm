import { UserEntity } from "./user.entity";
import {
  Entity,
  PrimaryColumn,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("contacts_info")
export class ContactInfoEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100 })
  user_id!: string;

  @Column({ type: "varchar", nullable: true })
  email!: string;

  @Column({ type: "varchar", nullable: true })
  phone_number!: string;

  @Column({ type: "varchar", nullable: true })
  fax_number!: string;

  @Column({ type: "varchar", nullable: true })
  address_info!: string;

  @CreateDateColumn({ type: "datetime", nullable: true })
  created_at!: string;

  @UpdateDateColumn({ type: "datetime", nullable: true })
  updated_at!: string;

  @DeleteDateColumn({ type: "datetime", nullable: true })
  deleted_at!: string;

  @ManyToOne(() => UserEntity, (user) => user.contact)
  @JoinColumn({ referencedColumnName: "id" })
  user?: UserEntity;
}
