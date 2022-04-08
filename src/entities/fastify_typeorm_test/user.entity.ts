import { ContactInfoEntity } from "./contact-info";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 50 })
  first_name!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  middle_name!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  last_name!: string;

  @Column({ type: "varchar", length: 50, unique: true })
  user_name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "simple-json", nullable: true })
  additional_info!: {
    address: string;
    blood_type: string;
    height: number;
  };

  @CreateDateColumn({ type: "datetime", nullable: true })
  created_at!: string;

  @UpdateDateColumn({ type: "datetime", nullable: true })
  updated_at!: string;

  @DeleteDateColumn({ type: "datetime", nullable: true })
  deleted_at!: string;

  @OneToMany(() => ContactInfoEntity, (contact) => contact.user)
  contact?: ContactInfoEntity[];
}
