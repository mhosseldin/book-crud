import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/createbook')
  async createBook(@Body() body: CreateBookDto) {
    return await this.appService.createBook(body);
  }

  @Get('/books')
  async getBooks() {
    return await this.appService.getBooks();
  }

  @Put('book/:id')
  async updateBook(@Body() body: CreateBookDto, @Param('id') id: string) {
    return await this.appService.updateBook(id, body);
  }

  @Delete('book/:id')
  async deleteBook(@Param('id') id: string) {
    return await this.appService.deleteBook(id);
  }
}
