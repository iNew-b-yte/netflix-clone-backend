import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  // Import ConfigModule
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { MoviesModule } from './movies/movie.module';
import { FavoritesModule } from './favorites/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Global ConfigModule to access environment variables
    MongooseModule.forRoot(process.env.MONGO_URI), // MongoDB Connection
    AuthModule,
    UsersModule,
    MoviesModule,
    FavoritesModule,
  ],
})
export class AppModule {}
