import { Injectable } from '@nestjs/common';
import { Service } from '../interfaces/service';
import { MessagesRepository } from '../repositories/messages.repository';

@Injectable()
export class MessagesService implements Service {
  constructor(private readonly repo: MessagesRepository) {}

  list() {
    return this.repo.findAll();
  }

  create(text: string) {
    return this.repo.create(text);
  }

  view(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, text: string) {
    return this.repo.update(id, text);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
