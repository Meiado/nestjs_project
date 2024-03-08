import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1709920044288 } from 'src/migrations/1709920044288-CreateCoursesTable';
import { CreateTagsTable1709920044288 } from 'src/migrations/1709921587841-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1709920044288, CreateTagsTable1709920044288],
});
