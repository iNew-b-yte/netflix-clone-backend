import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // HttpModule for HTTP requests
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { MoviesService } from './movie.service';
import { MoviesController } from './movie.controller';

@Module({
  imports: [
    HttpModule,         // HTTP requests for Movies API
    ConfigModule,       // Add ConfigModule here
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
