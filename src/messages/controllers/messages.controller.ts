import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../services/messages.service';
@Controller('messages')
export class MessagesController {
  constructor(private service: MessagesService) {}
  @Get()
  listMessages() {
    return this.service.list();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    const newId = await this.service.create(body.text);
    return 'Message created with ID: ' + newId;
  }

  @Get('/:id')
  async viewMessage(@Param('id') id: string) {
    const message = await this.service.view(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  @Put('/:id')
  async updateMessage(
    @Body() body: any,
    @Param('id') id: string,
  ): Promise<string | NotFoundException> {
    try {
      await this.service.update(id, body.text);
    } catch (error) {
      if (error instanceof Error) {
        throw new NotFoundException('Message not found');
      }
    }
    return id + ' Message updated!';
  }

  @Delete('/:id')
  async deleteMessage(@Param('id') id: string): Promise<string | NotFoundException> {
    try {
      await this.service.delete(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new NotFoundException('Message not found');
      }
    }
    return 'Message deleted!';
  }
}
