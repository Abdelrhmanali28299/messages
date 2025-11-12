import {
  Body,
  Controller,
  Delete,
  Get,
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
  createMessage(@Body() body: CreateMessageDto) {
    const newId = this.service.create(body.text);
    return 'Message created with ID: ' + newId;
  }

  @Get('/:id')
  viewMessage(@Param('id') id: string) {
    return this.service.view(id);
  }

  @Put('/:id')
  updateMessage(@Body() body: any, @Param('id') id: string): string {
    this.service.update(id, body.text);
    return 'Message updated!';
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: string): string {
    this.service.delete(id);
    return 'Message deleted!';
  }
}
