// Core
import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
// Packages
import { FileInterceptor } from '@nestjs/platform-express';
// Services
import { PostsService } from './posts.service';
// Dto
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.createPost(dto, image);
  }
}
