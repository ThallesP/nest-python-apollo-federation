import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './post.model';
import { User } from './user.model';

@Resolver(() => User)
export class UsersResolver {
  @ResolveField(() => [Post])
  public posts(@Parent() user: User): Post[] {
    console.log(user);
    return [
      {
        id: '1',
        content: 'me arrependi',
      },
    ];
  }
}
