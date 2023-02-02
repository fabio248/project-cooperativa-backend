import { Entity, OneToOne } from "typeorm";
import { Person } from "./utils/Person";
import { FamilyStatus } from "./FamilyStatus.entity";

//Conyuge
@Entity("spouse")
export class Spouse extends Person {
  @OneToOne(
    () => FamilyStatus,
    (familyStatus: FamilyStatus) => familyStatus.spouse
  )
  familyStatus: FamilyStatus;
}
