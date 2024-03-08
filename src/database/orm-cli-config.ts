import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1709920044288 } from 'src/migrations/1709920044288-CreateCoursesTable';
import { CreateTagsTable1709920044288 } from 'src/migrations/1709921587841-CreateTagsTable';
import { CreateCoursesTagsTable1709922494844 } from 'src/migrations/1709922494844-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1709923101232 } from 'src/migrations/1709923101232-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1709923772484 } from 'src/migrations/1709923772484-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1709920044288,
    CreateTagsTable1709920044288,
    CreateCoursesTagsTable1709922494844,
    AddCoursesIdToCoursesTagsTable1709923101232,
    AddTagsIdToCoursesTagsTable1709923772484,
  ],
});
