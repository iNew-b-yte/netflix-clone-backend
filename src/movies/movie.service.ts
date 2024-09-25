import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MoviesService {
  private readonly imdbApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.imdbApiKey = this.configService.get<string>('IMDB_API_KEY');
  }

  // Fetch top movies from the IMDb API
  async getTopMovies(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(`https://moviesdatabase.p.rapidapi.com/titles`, {
        headers: {
          'x-rapidapi-key': this.imdbApiKey,
        },
      }),
    );
    return response.data.results;
  }
}
