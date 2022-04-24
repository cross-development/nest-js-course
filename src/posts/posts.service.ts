// Core
import { Injectable } from '@nestjs/common';
// Packages
import { InjectModel } from '@nestjs/sequelize';
// Services
import { FilesService } from '../files/files.service';
// Models
import { Post } from './posts.model';
// Dto
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postRepository: typeof Post,
    private readonly fileService: FilesService,
  ) {}

  async createPost(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: fileName });

    return post;
  }
}
