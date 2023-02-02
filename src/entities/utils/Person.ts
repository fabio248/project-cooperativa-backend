import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "middle_name", nullable: true })
  middleName: string;

  @Column({ name: "third_name", nullable: true })
  thirdName: string;

  @Column({ name: "first_last_name" })
  firstLastName: string;

  @Column({ name: "second_last_name", nullable: true })
  secondLastName: string;

  @Column({ name: "married_name", nullable: true })
  marriedName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column()
  birthday: Date;
}
