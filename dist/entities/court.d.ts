import { BaseEntity } from "typeorm";
export declare enum WallType {
    ACRYLIC = "acrylic",
    CEMENT = "cement"
}
export declare enum CourtType {
    INDOOR = "indoor",
    OUTDOOR = "outdoor"
}
export declare class Court extends BaseEntity {
    id: number;
    name: string;
    wall_type: WallType;
    court_type: CourtType;
    image_url: string;
    available: boolean;
    schedules: string[];
    createdAt: Date;
    updatedAd: Date;
}
//# sourceMappingURL=court.d.ts.map