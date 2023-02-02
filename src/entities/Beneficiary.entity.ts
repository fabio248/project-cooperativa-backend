import { Column, Entity, ManyToOne } from "typeorm";
import { Person } from "./utils/Person";
import { Partner } from "./Partner.entity";

@Entity("beneficiary")
export class Beneficiary extends Person {
  @Column()
  percentage: number;

  @Column()
  relationship: string;

  @ManyToOne(() => Partner, (partner: Partner) => partner.beneficiarys)
  partner: Partner;
}
