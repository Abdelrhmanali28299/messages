import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(): string {
        return 'List of messages';
    }

    @Post()
    createMessage(): string {
        return 'Message created!';
    }

    @Get('/:id')
    viewMessage(): string {
        return 'Viewing a message';
    }

    @Put('/:id')
    updateMessage(): string {
        return 'Message updated!';
    }

    @Delete('/:id')
    deleteMessage(): string {
        return 'Message deleted!';
    }
}
