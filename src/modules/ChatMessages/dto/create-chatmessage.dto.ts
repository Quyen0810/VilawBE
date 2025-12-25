export class CreateChatMessageDto {
  sessionId: string;
  messages: Array<{
    sender: string;
    text: string;
    timestamp: Date;
    metadata: object;
  }>;

  constructor(sessionId: string, messages: Array<{ sender: string, text: string, timestamp: Date, metadata: object }>) {
    this.sessionId = sessionId;
    this.messages = messages;
  }
}
