import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  movieId: string;

  @Prop({ required: true })
  movieTitle: string;

  @Prop({ required: true })
  movieImage: string;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
