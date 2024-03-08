import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tags.entity';
import { randomUUID } from 'node:crypto';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];

  geratedId() {
    if (this.id) {
      return;
    }
    this.id = randomUUID();
  }
}
