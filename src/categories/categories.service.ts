import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {

  constructor(@InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>) { }

  create(createCategoryDto: CreateCategoryDto) {
    const createCategory = new this.categoryModel(createCategoryDto);
    return createCategory.save();
  }

  findAll() {
    return this.categoryModel.find({}).exec();
  }

  findOne(_id: string) {
    return this.categoryModel.findOne({ _id }).exec();
  }

  update(_id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.updateOne({ _id }, { $set: updateCategoryDto })
  }

  remove(_id: string) {
    return this.remove(_id);
  }
}
