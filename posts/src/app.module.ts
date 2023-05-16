import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Post } from './posts/post.model';
import { User } from './posts/user.model';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [Post, User],
      },
    }),
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
