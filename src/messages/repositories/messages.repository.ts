import { readFile, writeFile } from 'fs/promises';
import { Repository } from '../interfaces/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository implements Repository {
  private readonly filePath = 'messages.json';

  async findAll(): Promise<string[]> {
    return await this.readFile();
  }

  async findById(id: string): Promise<string> {
    const messages = await this.readFile();

    return messages[id];
  }

  async create(text: string): Promise<string> {
    const messages = await this.readFile();
    const id = Date.now().toString();
    messages[id] = {
      id,
      text,
    };
    await writeFile(this.filePath, JSON.stringify(messages, null, 2));
    return id;
  }

  async update(id: string, text: string): Promise<void> {
    const messages = await this.readFile();
    if (!messages[id]) {
      throw new Error('Message not found');
    }
    messages[id].text = text;

    await writeFile(this.filePath, JSON.stringify(messages, null, 2));
  }

  async delete(id: string): Promise<void> {
    const messages = await this.readFile();
    if (!messages[id]) {
      throw new Error('Message not found');
    }
    delete messages[id];

    await writeFile(this.filePath, JSON.stringify(messages, null, 2));
  }

  private async readFile(): Promise<any> {
    const fileData = await readFile(this.filePath, 'utf-8');
    return JSON.parse(fileData);
  }
}
