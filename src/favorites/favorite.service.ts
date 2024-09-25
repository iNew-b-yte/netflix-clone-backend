import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './favorite.schema';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
  ) {}

  // Add a movie to the user's favorites
  async addFavorite(userId: string, movie: any): Promise<Favorite> {
    const newFavorite = new this.favoriteModel({
      userId,
      movieId: movie.id,
      movieTitle: movie.title,
      movieImage: movie.image,
    });
    return newFavorite.save();
  }

  // Get all favorite movies for the user
  async getFavoritesByUser(userId: string): Promise<Favorite[]> {
    return this.favoriteModel.find({ userId }).exec();
  }

  // Remove a movie from the user's favorites
  async removeFavorite(userId: string, movieId: string): Promise<any> {
    return this.favoriteModel.deleteOne({ userId, movieId }).exec();
  }
}
