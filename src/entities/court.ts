import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum WallType {
    ACRYLIC = "acrylic",
    CEMENT = "cement",
  }
  
  export enum CourtType {
    INDOOR = "indoor",
    OUTDOOR = "outdoor",
  }

@Entity()
export class Court extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 100 })
    name: string

    @Column("enum", { enum: WallType })
    wall_type: WallType;

    @Column("enum", { enum: CourtType })
    court_type: CourtType;

    @Column("varchar")
    image_url: string;

    @Column("boolean", {default: true})
    available: boolean

    @Column("json")
    schedules: string[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;
}