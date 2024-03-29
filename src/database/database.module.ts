import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { Tag } from 'src/courses/entities/tags.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'docker',
    database: 'nestjs',
    entities: [Course, Tag],
    synchronize: true,
}

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: () => {
            return {
                ... dataSourceOptions,
            }
        }
    })]
})
export class DatabaseModule {}
