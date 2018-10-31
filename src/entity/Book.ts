import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Book {
  @ObjectIdColumn()
  public id: ObjectID

  @Column()
  public title: string

  @Column()
  public author: string
}
