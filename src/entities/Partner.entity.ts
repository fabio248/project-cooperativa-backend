import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Person } from "./utils/Person";
import { Beneficiary } from "./Beneficiary.entity";
import { User } from "./User.entity";
import { FamilyStatus } from "./FamilyStatus.entity";
import { Adress } from "./Adress.entity";

@Entity("partner")
export class Partner extends Person {
  @Column({ name: "home_phone" })
  homePhone: string;

  @Column({ name: "work_phone" })
  workPhone: string;

  @Column()
  genre: string;

  @Column({ name: "birth_country" })
  birthCountry: string;

  @Column()
  nationality: string;

  @OneToOne(() => User, (user: User) => user.partner)
  user: User;

  @OneToOne(
    () => FamilyStatus,
    (familyStatus: FamilyStatus) => familyStatus.partner
  )
  @JoinColumn()
  familyStatus: FamilyStatus;

  @OneToOne(() => Adress, (adress: Adress) => adress.partner)
  @JoinColumn()
  adress: Adress;

  @OneToMany(
    () => Beneficiary,
    (beneficiary: Beneficiary) => beneficiary.partner
  )
  beneficiarys: Array<Beneficiary>;
}
