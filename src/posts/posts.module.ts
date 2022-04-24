// Core
import { Module } from '@nestjs/common';
// Packages
import { SequelizeModule } from '@nestjs/sequelize';
// Controllers
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
// Modules
import { FilesModule } from '../files/files.module';
// Models
import { Post } from './posts.model';
import { User } from '../users/users.model';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
