import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(_id: string) {
    return `This action returns a #${_id} category`;
  }

  update(_id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${_id} category`;
  }

  remove(_id: string) {
    return `This action removes a #${_id} category`;
  }
}
