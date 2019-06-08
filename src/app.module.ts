import { Module } from '@nestjs/common';
import { TagsModule } from './tags/tags.module';
import { ThemesModule } from './themes/themes.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [TagsModule, ThemesModule, NotesModule],
})
export class ApplicationModule {
}
