import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './post.model';

@Resolver(() => Post)
export class PostsResolver {
  @Query(() => Post)
  post(): Post {
    return {
      id: '1',
      content: 'me arrependi',
    };
  }
}
