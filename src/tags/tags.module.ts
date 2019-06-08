import { Global, Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Global()
@Module({
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {
}
