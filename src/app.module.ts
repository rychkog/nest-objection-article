import { Module } from '@nestjs/common';
import { TagsModule } from './tags/tags.module';
import { ThemesModule } from './themes/themes.module';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TagsModule, ThemesModule, NotesModule, DatabaseModule],
})
export class ApplicationModule {
}
