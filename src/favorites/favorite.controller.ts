import { Controller, Get, Post, Delete, Body, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.gaurd';
import { FavoritesService } from './favorite.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  // Add a movie to favorites (Protected route)
  @UseGuards(JwtAuthGuard)
  @Post()
  async addFavorite(@Req() req, @Body() movie: any) {
    const userId = req.user.userId;
    return this.favoritesService.addFavorite(userId, movie);
  }

  // Get all favorite movies for the logged-in user (Protected route)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getFavorites(@Req() req) {
    const userId = req.user.userId;
    return this.favoritesService.getFavoritesByUser(userId);
  }

  // Remove a movie from favorites (Protected route)
  @UseGuards(JwtAuthGuard)
  @Delete()
  async removeFavorite(@Req() req, @Body() movieId: string) {
    const userId = req.user.userId;
    return this.favoritesService.removeFavorite(userId, movieId);
  }
}
