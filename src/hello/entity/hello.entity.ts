import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class HelloEntity{

    
    @Column()
    Location: string

    @Column()
    Ip: string

    @Column()
    Temprature: number

}