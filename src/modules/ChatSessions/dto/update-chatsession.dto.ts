import { PartialType } from '@nestjs/mapped-types';
import { CreateChatSessionDto } from './create-chatsession.dto';

export class UpdateChatSessionDto extends PartialType(CreateChatSessionDto) {}

