import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [PostsResolver, UsersResolver],
})
export class PostsModule {}
