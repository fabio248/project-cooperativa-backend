import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Partner } from "./Partner.entity";

@Entity("adress")
export class Adress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rent: boolean;
  @Column()
  street: string;
  @Column({ name: "home_number" })
  homeNumber: string;
  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  subregion: string;

  @Column()
  lalitude: string;

  @Column()
  longitude: string;

  @OneToOne(() => Partner, (partner: Partner) => partner.adress)
  partner: Partner;
}
