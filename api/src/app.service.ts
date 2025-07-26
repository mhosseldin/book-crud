import { Body, Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

type BookItem = {
  title: string;
  author: string;
  genre: string;
  price: number;
};

@Injectable()
export class AppService {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}

  async getBooks() {
    return await this.bookRepo.find();
  }

  async createBook(bookBody: BookItem) {
    const book = this.bookRepo.create(bookBody);
    return await this.bookRepo.save(book);
  }

  async updateBook(id: string, body: BookItem) {
    return await this.bookRepo.update(id, body);
  }

  async deleteBook(id: string) {
    return await this.bookRepo.delete(id);
  }
}
