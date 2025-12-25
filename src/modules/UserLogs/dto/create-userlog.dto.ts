export class CreateUserLogDto {
  userId: string;
  action: string;
  timestamp: Date;
  ipAddress: string;
  constructor(userId: string, action: string, timestamp: Date, ipAddress: string) {
    this.userId = userId;
    this.action = action;
    this.timestamp = timestamp;
    this.ipAddress = ipAddress;
  }
}
