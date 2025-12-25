export class CreateChatSessionDto {
  userId: string;
  startTime: Date;
  endTime?: Date;
  topic?: string;
  constructor(userId: string, startTime: Date, endTime?: Date, topic?: string) {
    this.userId = userId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.topic = topic;
  }
}

