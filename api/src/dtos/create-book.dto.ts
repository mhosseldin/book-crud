import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  genre: string;

  @IsNumber()
  price: number;
}
