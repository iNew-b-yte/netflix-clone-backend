import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // Get top 250 movies from IMDb API
  @Get('top')
  async getTopMovies() {
    return this.moviesService.getTopMovies();
  }
}
