import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Spouse } from "./Spouse.entity";
import { Partner } from "./Partner.entity";

@Entity("family_status")
export class FamilyStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "civil_status" })
  civilStatus: string;

  @OneToOne(() => Partner)
  partner: Partner;

  @OneToOne(() => Spouse, (spouse) => spouse.familyStatus)
  @JoinColumn()
  spouse: Spouse;
}
