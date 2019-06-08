import { Injectable } from '@nestjs/common';
import { ThemeModel } from '../database/models/theme.model';

@Injectable()
export class ThemesService {
  findAll() {
    return null;
  }

  findOne(id: number) {
    return null;
  }

  create(props: Partial<ThemeModel>) {
    return null;
  }

  update(id: number, props: Partial<ThemeModel>) {
    return null;
  }

  delete(id: number) {
    return null;
  }
}
